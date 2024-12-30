import { getScrollTop, scrollTo } from './scrollTop';

export interface SmoothConfig {
  currentScrollTop: number;
  scrollToTop: number;
  scrollFn: (scrollTop: number) => void;
  percent?: number;
  onScrollEnd?: () => void;
}

export function smooth({
  currentScrollTop,
  scrollToTop,
  scrollFn,
  percent = 10,
  onScrollEnd,
}: SmoothConfig) {
  const scrollWay = scrollToTop > currentScrollTop ? 'down' : 'up';
  const step = (scrollToTop - currentScrollTop) * (percent / 100);
  let id: number;

  const scroll = () => {
    currentScrollTop += step;

    if (
      (scrollWay === 'down' && currentScrollTop >= scrollToTop) ||
      (scrollWay === 'up' && currentScrollTop <= scrollToTop)
    ) {
      scrollFn(scrollToTop);

      window.cancelAnimationFrame(id);
      if (onScrollEnd) window.requestAnimationFrame(onScrollEnd);
    } else {
      scrollFn(currentScrollTop);
      window.requestAnimationFrame(scroll);
    }
  };

  window.requestAnimationFrame(scroll);
}

export function smoothScroll({
  scrollTarget,
  scrollToTop,
  percent = 10,
  onScrollEnd,
}: {
  scrollTarget: Window | HTMLElement;
} & Pick<SmoothConfig, 'scrollToTop' | 'percent' | 'onScrollEnd'>) {
  const currentScrollTop = getScrollTop(scrollTarget);

  smooth({
    currentScrollTop,
    scrollToTop,
    scrollFn: (scrollTop) => scrollTo(scrollTarget, scrollTop),
    percent,
    onScrollEnd,
  });
}
