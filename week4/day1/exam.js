console.log('exam');

/*
1-How much Greg scored in their first Biology exam.
2-How much Sarah scored in their last Maths exam.
3-The highest score Thomas achieved in Maths throughout the year.
4-The quarter that Greg achieved his lowest score in Biology in the year.
5-The average of Sarah's scores in Maths for the whole year.
*/

var examResults = {
  Greg: {
    Biology: [90, 75, 23, 60],
    Maths: [100, 80, 30, 45]
  },
  Sarah: {
    Biology: [70, 65, 80, 95],
    Maths: [80, 77, 64, 90]
  },
  Thomas: {
    Biology: [40, 60, 75, 98],
    Maths: [36, 50, 67, 82]
  }
}

// 1
console.log(examResults.Greg.Biology[0]);

// 2
console.log(examResults.Sarah.Maths[(examResults.Sarah.Maths.length) -1]);

// 3
var sortThomas = examResults.Thomas.Maths.sort((a, b) => (a < b) ? 1 :-1);
console.log(sortThomas[0]);

// 4
var sortGreg = examResults.Greg.Biology.sort((a, b) => (a > b) ? 1 :-1);
console.log(sortGreg[0]);

// 5
var averageSarah = examResults.Sarah.Maths.reduce((total, score) => total + score, 0);
console.log(Math.round((averageSarah) / examResults.Sarah.Maths.length));