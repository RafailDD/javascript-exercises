const leapYears = function(year) {
  conDiv4 = !(year%4);
  conDiv100 = !(year%100);
  conDiv400 = !(year%400);
  if (conDiv4 && !(conDiv100) || conDiv400) {
    return true;    
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
