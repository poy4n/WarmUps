
function convertToRoman(num) {
    
    let romanTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let resultNum = ''

    for ( key in romanTable) {
        console.log(romanTable[key])
        // console.log(key)

        while (num >= romanTable[key]) {
            resultNum += key
            num -= romanTable[key]
        }
    }
    return resultNum
  }

  console.log(convertToRoman(2010))