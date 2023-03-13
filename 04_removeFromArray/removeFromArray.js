const removeFrommyArray = function(myArray, ...elements) {
  const elementsmyArray = Array.from(elements);
  for (let i = 0;i<=elementsmyArray.length-1;i++) {
    const index = myArray.indexOf(elementsmyArray[i]);
    if (index > -1) {
      myArray.splice(index, 1);
    }
  }
  return myArray;
};

// Do not edit below this line
module.exports = removeFrommyArray;
