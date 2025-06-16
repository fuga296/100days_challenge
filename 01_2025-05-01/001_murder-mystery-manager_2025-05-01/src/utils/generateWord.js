// CV、CVC、V、CCV、CVCC、CCVC、VCV、CVCV、VCC、CVVC、CCVCC、CCVCV、CVCCV、VVC、CVV、VCVC、CCVVC、CVVCC、VCCV、CCCVC

const patterns = [
  "CVC", "CVVC", "CCVC", "VC", "VCC", "CVCV", "CCVVC", "CVCVC", "CVCC"
];

const consonants = "bcdfghjklmnpqrstvwxyz".split('');
const vowels = "aeiou".split('');

function generateWordFromPattern(pattern) {
  let word = "";
  for (const char of pattern) {
    if (char === "C") {
      word += consonants[Math.floor(Math.random() * consonants.length)];
    } else if (char === "V") {
      word += vowels[Math.floor(Math.random() * vowels.length)];
    }
  }
  return word;
}

function generateDummyWord() {
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  return generateWordFromPattern(pattern);
}

export default generateDummyWord;


