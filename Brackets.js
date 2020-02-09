/**
 * https-//codility.com/demo/results/trainingRQ4V9Q-PWX/ 
 */

/**
  * Determine whether a given string of parentheses (multiple types) is properly nested.
  */

function solution(S) {
	// write your code in JavaScript (Node.js 4.0.0)

	var i = 0;
	var stack = [];

	if (S.length % 2 === 1) {
		return 0;
	}

	for (i = 0; i < S.length; i++) {
		var char = S.charAt(i);
		if (isOpener(char)) {
			stack.push(char);
		} else {
			if (stack.length === 0) {
				return 0;
			} else {
				var lastChar = stack.pop();
				if (!checkCloser(lastChar, char)) {
					return 0;
				}
			}
		}
	}

	if (stack.length === 0) {
		return 1;
	} else {
		return 0;
	}
}

function isOpener(char) {
	return char === '{' || char === '[' || char === '(' ? true : false;
}

function checkCloser(opener, closer) {
	if (opener === '(' && closer === ')') return true;
	if (opener === '[' && closer === ']') return true;
	if (opener === '{' && closer === '}') return true;

	return false;
}
