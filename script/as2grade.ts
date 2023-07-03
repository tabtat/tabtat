let score = process.argv.slice(2);  
console.log(score);

let resultGradeSum:number = 0
let total:number = 0


for (let x in score){
    total = Number(score[x])
    resultGradeSum = resultGradeSum + total
}

console.log(`ผลรวมของคะแนนทั้งหมดคือ : ${resultGradeSum}`)

if(resultGradeSum >= 80 && resultGradeSum <= 100){
    console.log("ท่านได้เกรด A")
}else if(resultGradeSum >= 70 && resultGradeSum <= 79){
    console.log("ท่านได้เกรด B")
}else if(resultGradeSum >= 60 && resultGradeSum <= 69){
    console.log("ท่านได้เกรด C")
}else if(resultGradeSum >= 50 && resultGradeSum <= 59){
    console.log("ท่านได้เกรด D")
}else if(resultGradeSum <50){
    console.log("ท่านได้เกรด F")
}else{
    console.log("คะแนนของท่านไม่ถูกต้องกรุณากรอกคะแนนใหม่")
}
