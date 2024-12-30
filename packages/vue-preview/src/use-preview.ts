import { ref } from 'vue';
import { getScrollTop, smoothScroll } from '@vokit-editor/shared';
import type { SmoothConfig } from '@vokit-editor/shared';

export interface UsePreviewConfig {
  lineMarkup: string;
  anchorMarkup: string;
  headingMarkup: string;
  top?: number;
  scrollContainer?: () => HTMLElement | Window;
  onImageClick?: (images: string[], imagePreviewInitIndex: number) => void;
}
export const usePreview = (config: UsePreviewConfig) => {
  const root = ref<HTMLElement>();

  const handlePreviewClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // image preview
    if (target.tagName === 'IMG' && root.value) {
      const src = target.getAttribute('src');

      if (!src) return;

      const imageEls = Array.from(root.value.querySelectorAll('img'));
      const images = imageEls
        .map((el) => el.getAttribute('src'))
        .filter((src) => src) as string[];
      const imagePreviewInitIndex = imageEls.indexOf(
        target as HTMLImageElement,
      );

      config.onImageClick?.(images, imagePreviewInitIndex);

      return;
    }

    const scrollToTargetId = target.getAttribute(config.anchorMarkup);
    const scrollToTargetEl = root.value?.querySelector<HTMLElement>(
      `[${config.headingMarkup}="${scrollToTargetId}"]`,
    );

    if (scrollToTargetEl) {
      scrollToTarget({
        target: scrollToTargetEl,
      });
    }
  };
  const getOffsetTop = (
    target: HTMLElement,
    container: HTMLElement | Window,
  ) => {
    const rect = target.getBoundingClientRect();

    if (container === window || container === document.documentElement) {
      return rect.top;
    }

    return rect.top - (container as HTMLElement).getBoundingClientRect().top;
  };
  const scrollToTarget = ({
    target,
    scrollContainer = config.scrollContainer?.() || window,
    top = config.top || 0,
    onScrollEnd,
  }: {
    target: HTMLElement;
    scrollContainer?: HTMLElement | Window;
    top?: number;
    onScrollEnd?: SmoothConfig['onScrollEnd'];
  }) => {
    const offsetTop = getOffsetTop(target, scrollContainer);
    const scrollTop = getScrollTop(scrollContainer) + offsetTop - top;

    smoothScroll({
      scrollTarget: scrollContainer,
      scrollToTop: scrollTop,
      onScrollEnd,
    });
  };
  const scrollToLine = ({
    lineIndex,
    onScrollEnd,
  }: {
    lineIndex: number;
    onScrollEnd: SmoothConfig['onScrollEnd'];
  }) => {
    if (lineIndex) {
      const target = root.value?.querySelector(
        `[${config.lineMarkup}="${lineIndex}"]`,
      ) as HTMLElement;

      if (target) scrollToTarget({ target, onScrollEnd });
    }
  };

  return {
    root,
    scrollToLine,
    scrollToTarget,
    smoothScroll,
    handlePreviewClick,
  };
};
