export function getRandomTime(min: number = 1000, max: number = 2000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
