// This just tells typescript what to use for tooltiptext and typechecking
// Nothing is defined because lodash is imported
declare module 'lodash' {
  export function chunk<T>(collection: T[], size?: number): T[][];
}
