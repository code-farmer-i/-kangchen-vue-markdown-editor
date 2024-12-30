export function getScrollTop(target: HTMLElement | Window) {
  let result = 0;

  if (target === window) {
    result = target.scrollY;
  } else if (target) {
    result = (target as HTMLElement).scrollTop;
  }

  return result;
}

export function scrollTo(target: HTMLElement | Window, scrollTop: number) {
  if (target === window) {
    window.scrollTo(window.scrollX, scrollTop);
  } else if (target) {
    (target as HTMLElement).scrollTop = scrollTop;
  }
}
