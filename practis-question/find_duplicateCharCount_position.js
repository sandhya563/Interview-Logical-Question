/// FINDE DUPLICATE CHARECTOR COUNT AND INDEX POSITION FROM STING WITH hasOwnProperty
// function findDuplicateCharCountAndIndexPosition(string) {
//     const duplicateCharCountIndexPosition = {};
//     for (let i = 0; i < string.length; i++) {
//       const char = string[i];
//       if (duplicateCharCountIndexPosition.hasOwnProperty(char)) {
//         duplicateCharCountIndexPosition[char].count++;
//         duplicateCharCountIndexPosition[char].indexPositions.push(i);
//       } else {
//         duplicateCharCountIndexPosition[char] = {
//           count: 1,
//           indexPositions: [i],
//         };
//       }
//     }
//     return duplicateCharCountIndexPosition;
//   }
// const string = "abcabc kjhkh  kjhio iy8yuho y9ybb";
// const duplicateCharCountAndIndexPositionValue = findDuplicateCharCountAndIndexPosition(string);
// console.log(duplicateCharCountAndIndexPositionValue);



/// FINDE DUPLICATE CHARECTOR COUNT AND INDEX POSITION FROM STING
function findDuplicateCharCountIndexPosition(string) {
    const duplicateCharCountPosition = {};
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (duplicateCharCountPosition[char] === undefined) {

        duplicateCharCountPosition[char] = {
          count: 1,
          indexPositions: [i],
        };
      } else {
        duplicateCharCountPosition[char].count++;
        duplicateCharCountPosition[char].indexPositions.push(i);
      }
    }
    return duplicateCharCountPosition;
  }
const string = "abcabcbb";
const duplicateCharCountPositionObjcet = findDuplicateCharCountIndexPosition(string);

console.log(duplicateCharCountPositionObjcet);