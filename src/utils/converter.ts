export function pascalCaseToCamelCase(string: string): string {
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return ""
    return index === 0 ? match.toLowerCase() : match.toUpperCase()
  })
}
