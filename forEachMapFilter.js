function doubleValues(arr){
    let result = []
        arr.forEach(function(val){
        result.push(val*2)
    })
    return result
}

function onlyEvenValues(arr){
    let result = []
    arr.forEach(function(val){
        if(val % 2 == 0){
            result.push(val)
        }
    })
    return result
}

 function showFirstAndLast(arr){
    let result = [];
    arr.forEach(function(val) {
      result.push(val[0] + val[val.length - 1]);
    });
    return result;
  }
  
function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value
    })
    return arr
}

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2
    })
}

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i
    })
}

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key]
    })
}

function extractFullName(arr){
    return arr.map(function(val){
        return val['first'] + ' ' + val['last']
    })
}

function filterByValue(arr, key){
    return arr.filter(function(val, i){
        return val[key]
    })
}

function find(arr, x){
    return arr.filter(function(val){
        return val == x
    })
}

function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

function doubleOddNumbers(arr) {
  return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
  }