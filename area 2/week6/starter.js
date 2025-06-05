a = 40;
b = 14;

function add(a, b) {
  total = a + b;
  console.log(total);
  return total;
}

function subtract(a, b) {
  res = a - b;
  return res;
}

c = add(a, b);
console.log(c);

function grade(marks) {
  if (marks > 80) {
    return "HD";
  } else if (marks < 40) {
    return "Fail";
  } else {
    return "Pass";
  }
}

score = 47;
msg = grade(score);
console.log(msg);
