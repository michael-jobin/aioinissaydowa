export function convertlinesBreaks(text: string): string {
 return text.replace(/\n/g, '<br>');
}