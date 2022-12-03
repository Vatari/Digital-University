import { UntypedFormControl } from '@angular/forms';

export function restrictedWords(words: any) {
  return (check: UntypedFormControl): { [key: string]: any } => {
    if (!words) return null as any;
    let invalidWords = words
      .map((w: any) => (check.value.includes(w) ? w : null))
      .filter((w: any) => w != null);

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : (null as any);
  };
}
