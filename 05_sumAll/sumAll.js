const sumAll = function(start, end) {
  let sum=0;
  if (typeof start !== "number") return "ERROR";
  if (typeof end !== "number") return "ERROR"; 
  if (start<0 || end <0) return "ERROR";
  if (end < start) [start, end] = [end, start];
  for (let i=start; i<=end; i++) {
    sum+=i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
