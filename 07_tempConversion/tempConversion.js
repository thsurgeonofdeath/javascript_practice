const ftoc = function(far) {
  const celc = Math.round(((far - 32)*(5/9))*10)/10;
  return celc;
};


const ctof = function(cel) {
  const far = Math.round(((cel * (9/5))+32)*10)/10;
  return far;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
