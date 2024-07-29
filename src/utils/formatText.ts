export function convertlinesBreaks(text: string): string {
 return text.replace(/\n/g, '<br>');
}

export function truncate(text: string, length: number): string {
 if (text.length <= length) {
  return text;
 }
 return text.slice(0, length) + '...';
}