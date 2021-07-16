export class PositionHelper {
  format(x: number, y: number, direction: string): string {
    return `(${x},${y},${direction})`;
  }
}