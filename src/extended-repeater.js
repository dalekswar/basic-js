const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const base = String(str);

  const separator =
    options.separator !== undefined ? String(options.separator) : "+";

  const additionSeparator =
    options.additionSeparator !== undefined
      ? String(options.additionSeparator)
      : "|";

  const repeatTimes =
    options.repeatTimes !== undefined ? Number(options.repeatTimes) : 1;

  const additionRepeatTimes =
    options.additionRepeatTimes !== undefined
      ? Number(options.additionRepeatTimes)
      : 1;

  const hasAddition = Object.prototype.hasOwnProperty.call(options, "addition");
  const addition = hasAddition ? String(options.addition) : "";

  const additionPart = hasAddition
    ? Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    : "";

  const unit = base + additionPart;

  return Array(repeatTimes).fill(unit).join(separator);
}

module.exports = {
  repeater,
};
