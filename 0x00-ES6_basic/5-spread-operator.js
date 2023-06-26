export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string].map((element, index, arr) => `'${element}'${index !== arr.length - 1 ? (index % 3 === 2 ? ',\n' : ', ') : ''}`).join('');
}
