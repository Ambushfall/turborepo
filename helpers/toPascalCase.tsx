export const toPascalCase = (string:string) => {
return string.replace(/\w+/g, (w) => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`)
}