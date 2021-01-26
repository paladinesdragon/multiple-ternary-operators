//In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".

function checkSign (num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

function checkSign2 (num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative": "zero";
}

function checkSign3 (num) {
  return (num < 0) ? "negative" : (num === 0) ? "zero" : "positive";
}

//uncomment to test
//checkSign(0);
//checkSign(10);
//checkSign(-12);

//checkSign2(0);
//checkSign2(10);
//checkSign2(-12);

//checkSign3(0);
//checkSign3(10);
//checkSign3(-12);
