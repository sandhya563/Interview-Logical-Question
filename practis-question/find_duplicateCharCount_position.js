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
function findDuplicateCharCountAndIndexPositionWithoutHasOwnProperty(string) {
    const duplicateCharCountAndIndexPosition = {};
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (duplicateCharCountAndIndexPosition[char] === undefined) {

        duplicateCharCountAndIndexPosition[char] = {
          count: 1,
          indexPositions: [i],
        };
      } else {
        duplicateCharCountAndIndexPosition[char].count++;
        duplicateCharCountAndIndexPosition[char].indexPositions.push(i);
      }
    }
    return duplicateCharCountAndIndexPosition;
  }
const string = "abcabcbb";
const duplicateCharCountAndIndexPosition = findDuplicateCharCountAndIndexPositionWithoutHasOwnProperty(string);

console.log(duplicateCharCountAndIndexPosition);