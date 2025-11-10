const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) { this.direct = direct; }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const A = 65, msg = String(message).toUpperCase(), k = String(key).toUpperCase();
    let j = 0, out = [];
    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      if (ch >= 'A' && ch <= 'Z') {
        const m = ch.charCodeAt(0) - A, shift = k.charCodeAt(j % k.length) - A;
        out.push(String.fromCharCode(((m + shift) % 26) + A));
        j++;
      } else out.push(ch);
    }
    const res = out.join('');
    return this.direct ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const A = 65, msg = String(message).toUpperCase(), k = String(key).toUpperCase();
    let j = 0, out = [];
    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      if (ch >= 'A' && ch <= 'Z') {
        const m = ch.charCodeAt(0) - A, shift = k.charCodeAt(j % k.length) - A;
        out.push(String.fromCharCode(((m - shift + 26) % 26) + A));
        j++;
      } else out.push(ch);
    }
    const res = out.join('');
    return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
