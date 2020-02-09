/**
 * https://app.codility.com/demo/results/trainingZ47Q2A-CUW/
 */

function solution(S, P, Q) {
	// write your code in JavaScript (Node.js 4.0.0)

	var result = [];
	var lastA = [];
	var lastC = [];
	var lastG = [];

	for (var i = 0; i < S.length; i++) {
		if (i === 0) {
			lastA.push(-1);
			lastC.push(-1);
			lastG.push(-1);
		} else {
			lastA.push(lastA[i - 1]);
			lastC.push(lastC[i - 1]);
			lastG.push(lastG[i - 1]);
		}

		// console.log('S[' + i + ']:' + S[i]);

		if (S[i] == 'A') {
			lastA[i] = i;
		} else if (S[i] == 'C') {
			lastC[i] = i;
		} else if (S[i] == 'G') {
			lastG[i] = i;
		}
	}

	console.log('lastA:', lastA);
	console.log('lastC:', lastC);
	console.log('lastG:', lastG);

	for (var i = 0; i < P.length; i++) {
		if (lastA[Q[i]] >= P[i]) {
			result.push(1);
		} else if (lastC[Q[i]] >= P[i]) {
			result.push(2);
		} else if (lastG[Q[i]] >= P[i]) {
			result.push(3);
		} else {
			result.push(4);
		}
	}

	return result;
}

function value(gene) {
	if (gene == 'A') {
		return 1;
	} else if (gene == 'C') {
		return 2;
	} else if (gene == 'G') {
		return 3;
	} else {
		return 4;
	}
}

const SEQ = 'CAGCCTA';
const P = [ 2, 5, 0 ];
const Q = [ 4, 5, 6 ];

console.log(solution(SEQ, P, Q));
