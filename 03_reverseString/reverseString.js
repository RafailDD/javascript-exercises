const reverseString = function(text) {
  const charArray = text.split("");
  let finalString = "";
  for (let i = text.length-1; i>=0; i--) {
    finalString+=charArray[i];
  }
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
