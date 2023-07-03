var score = process.argv.slice(2);
console.log(score);
var resultGradeSum = 0;
var total = 0;
for (var x in score) {
    total = Number(score[x]);
    resultGradeSum = resultGradeSum + total;
}
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E30\u0E41\u0E19\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E04\u0E37\u0E2D : ".concat(resultGradeSum));
if (resultGradeSum >= 80 && resultGradeSum <= 100) {
    console.log("ท่านได้เกรด A");
}
else if (resultGradeSum >= 70 && resultGradeSum <= 79) {
    console.log("ท่านได้เกรด B");
}
else if (resultGradeSum >= 60 && resultGradeSum <= 69) {
    console.log("ท่านได้เกรด C");
}
else if (resultGradeSum >= 50 && resultGradeSum <= 59) {
    console.log("ท่านได้เกรด D");
}
else if (resultGradeSum < 50) {
    console.log("ท่านได้เกรด F");
}
else {
    console.log("คะแนนของท่านไม่ถูกต้องกรุณากรอกคะแนนใหม่");
}
