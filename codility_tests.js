function solution(A, B, K) {
	// write your code in JavaScript (Node.js 4.0.0)

	if (A === B && A % K !== 0) {
		return 0;
	} else if (A === B && A % K === 0) {
		return 1;
	}

	console.log(parseInt(B / K));
	console.log(parseInt((A - 1) / K));

	var total = parseInt(B / K) - (A > 0 ? parseInt((A - 1) / K) : 0);

	if (A === 0) total++;

	console.log(total);

	return total;
}

console.log(solution(1, 6, 2));
console.log(solution(3, 7, 3));

// function solution(A) {
// 	// write your code in JavaScript (Node.js 4.0.0)
// 	var lower = [ A.length ];
// 	var upper = [ A.length ];

// 	lower.push(0);

// 	for (var i = 0; i < A.length; i++) {
// 		var iRev = A.length - i - 1;
// 		console.log(iRev);

// 		if (i === 0) {
// 			lower[i] = 0;
// 		} else {
// 			lower[i] = lower[i - 1] + A[i - 1];
// 		}

// 		if (iRev === A.length - 1) {
// 			upper[iRev] = A[iRev];
// 		} else {
// 			upper[iRev] = upper[iRev + 1] + A[iRev];
// 		}
// 		console.log(lower);
// 		console.log(upper);
// 	}

// 	var result = Math.abs(lower[1] - upper[1]);

// 	for (var i = 2; i < lower.length; i++) {
// 		var diff = Math.abs(lower[i] - upper[i]);
// 		if (diff < result) {
// 			result = diff;
// 		}
// 	}

// 	return result;
// }

// const A = [ 3, 2, 5, 1, 7, 5, 0 ];
// console.log(solution(A));
