function longestWordInString(str) {
  const words = str.split(' ');
  let longest = 0;

  for (let i = 0; i<words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

export default longestWordInString;

