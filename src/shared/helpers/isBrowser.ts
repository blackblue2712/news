export function isBrowser(): boolean {
  return !!(process as any).browser;
}
