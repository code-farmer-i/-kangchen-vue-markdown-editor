export class VokitException {
  error(message: string) {
    console.error(`[VokitEditor] ${message}`);
  }

  warn(message: string) {
    console.warn(`[VokitEditor] ${message}`);
  }
}

export const vokitException = new VokitException();
