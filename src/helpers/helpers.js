export const modifyString = (string, initialSubstring, newSubstring) => {

  let newString = ''
  for (let letter of string) {
    if (letter === initialSubstring) {
      letter = newSubstring
    }
    newString += letter
   }
  return newString
}