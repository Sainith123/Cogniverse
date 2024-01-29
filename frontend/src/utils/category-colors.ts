type CategoryColors = Map<string, [string, string]>;

const categoryColors: CategoryColors = new Map([
  ['AR', ['bg-pink-200 dark:bg-pink-900', 'bg-pink-500/80']],
  ['VR', ['bg-green-200 dark:bg-green-900', 'bg-green-500/80']],
  ['HEALTH', ['bg-yellow-200 dark:bg-yellow-900', 'bg-yellow-500/80']],

]);

export const categories: string[] = Array.from(categoryColors.keys());

export function getCategoryColors(category: string): [string, string] {
  const colorTuple: [string, string] | undefined = categoryColors.get(category);
  return colorTuple ?? ['bg-cyan-200 dark:bg-cyan-900', 'bg-cyan-500/80'];
}
