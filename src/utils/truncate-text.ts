export function truncateText(text: string, maxLength: number = 14): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}
