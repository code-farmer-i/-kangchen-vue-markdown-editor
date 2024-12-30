const { toString } = Object.prototype;

export const isObject = (target: any) =>
  toString.call(target) === '[object Object]';

function extend(to: Record<string, any>, _from: Record<string, any>) {
  Object.keys(_from).forEach((key) => {
    to[key] = _from[key];
  });

  return to;
}

export function arraytoObject(arr: any[]) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

export const inBrowser = typeof window !== 'undefined';

export function isKorean(text: string) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;

  return reg.test(text);
}

export function modifyText({
  selectedText,
  generator,
  ignoreEmptyLine = true,
}: {
  selectedText?: string;
  generator(
    selectedText: string | undefined,
    rowIndex: number,
  ): { text: string; selection?: { from: number; to: number } };
  ignoreEmptyLine?: boolean;
}) {
  // 如果当前选中的文本包含换行 则插入后选中插入的所有文本
  if (selectedText && selectedText.indexOf('\n') !== -1) {
    const text = selectedText
      .split('\n')
      .map((rowText, index) => {
        const isEmptyLine = !rowText;
        if (ignoreEmptyLine && isEmptyLine) return '';

        return generator(rowText, index + 1).text;
      })
      .join('\n');

    return {
      text,
      selection: {
        from: 0,
        to: text.length,
      },
    };
  } else {
    return generator(selectedText, 1);
  }
}
