/**
 * https://app.codility.com/demo/results/trainingR637FP-8XS/
 * 
 * 
 * Instructions:
 * Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
 * 
 */

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	A.sort(function(a, b) {
		return Math.abs(b) - Math.abs(a);
	});

	var positiveCount = 0;
	var negativeCount = 0;
	var zeroCount = 0;

	for (var i = 0; i < A.length; i++) {
		if (A[i] > 0) {
			positiveCount++;
		} else if (A[i] < 0) {
			negativeCount++;
		} else {
			zeroCount++;
		}
	}

	//console.log('positive, negative, zero:', positiveCount, negativeCount, zeroCount);

	if (positiveCount === 0) {
		if (zeroCount === 0) {
			return A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
		} else {
			return 0;
		}
	} else {
		if (negativeCount === 1) {
			var counter = 0;
			var max = 1;

			for (var i = 0; i < A.length; i++) {
				if (A[i] > 0) {
					counter++;
					max *= A[i];
					if (counter === 3) {
						return max;
					}
				}
			}
		} else {
			negativeCount = 0;
			var max = 1;
			for (var i = 0; i < A.length; i++) {
				if (A[i] < 0) negativeCount++;
				if (i < 2) {
					max *= A[i];
				} else {
					if (max < 0 && A[i] < 0) {
						max *= A[i];
						return max;
					} else if (max > 0 && A[i] > 0) {
						max *= A[i];
						return max;
					}
				}
			}
		}
	}
}

//For example, for the input [2, 100, 3, -1000] the solution terminated unexpectedly.
