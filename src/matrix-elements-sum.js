const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return 0;

  const cols = matrix[0].length;
  const blocked = Array(cols).fill(false);
  let sum = 0;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < cols; c++) {
      if (blocked[c]) continue;
      if (matrix[r][c] === 0) blocked[c] = true;
      else sum += matrix[r][c];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
