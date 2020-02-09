/**
 * https://app.codility.com/demo/results/training5FCWC6-F95/
 */

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	if (A.length < 3) {
		return 0;
	}

	A.sort(function(a, b) {
		return a - b;
	});

	for (var i = 2; i < A.length; i++) {
		if (validate(A[i - 2], A[i - 1], A[i])) {
			return 1;
		}
	}

	return 0;
}

function validate(val0, val1, val2) {
	var result = true;

	result = result && val0 + val1 > val2;
	result = result && val0 + val2 > val1;
	result = result && val1 + val2 > val0;

	return result;
}
