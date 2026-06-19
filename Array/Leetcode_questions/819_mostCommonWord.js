function mostCommonWord(paragraph, banned) {
  let obj = {};
  let words = paragraph.toLowerCase().split(/\W+/);

  for (let word of words) {
    if (obj[word]) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  }
  // console.log(obj)

  let maxWord = "",
    maxWordCount = 0;

  // let
  for (let key in obj) {
    if (!banned.includes(key) && key !== "") {
      if (obj[key] > maxWordCount) {
        maxWordCount = obj[key];
        maxWord = key;
      }
    }
  }

  return maxWord;
}


let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));