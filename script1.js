/* A couple of function calls have been provided for you so you can test out your code.

Tips

You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores. */

function getAverage(scores) {
    let total = 0
    for (let i =0; i < scores.length;i++){
      total += scores[i]
    }
    let average = total / (scores.length)
    return average
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
/* Step 2

Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

Here are the scores and their corresponding letter grades:
Here are the scores and their corresponding letter grades:
Score Range 	Grade
100 	"A++"
90 - 99 	"A"
80 - 89 	"B"
70 - 79 	"C"
60 - 69 	"D"
0  - 59 	"F"

Tips

    Remember that you learned about conditional statements(if, else if, and else).
    Remember that you learned about comparison operators (>, <, >=, <=, ===).
*/
function getGrade(score) {
 if (score === 100){
    return "A++"
 } else if (score >= 90){
    return "A"
 } else if (score>=80 ){
    return "B"
 }
  else if (score>=70){
    return "C"
  }
 else if (score>=60){
    return "D"
 } else if (score < 60){
    return "F"
 } else{
    return "Score not in accepted parameters"
 }
}
console.log()
console.log()
console.log()