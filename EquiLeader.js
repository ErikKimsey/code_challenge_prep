/**
 * https://app.codility.com/demo/results/trainingV5AZPJ-J9X/
 */

/**
  A non-empty array A consisting of N integers is given.
  The leader of this array is the value that occurs in more than half of the elements of A.
  An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.
*/

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	var stack = [];
	var arr = JSON.parse(JSON.stringify(A));
	var i = 0;

	if (A.length < 2) {
		return 0;
	}

	arr.sort(function(a, b) {
		return a - b;
	});
	stack.push(arr[0]);

	for (i = 1; i < arr.length; i++) {
		if (stack.length === 0) {
			stack.push(arr[i]);
		} else {
			var last = stack.pop();

			if (last === arr[i]) {
				stack.push(last);
				stack.push(arr[i]);
			}
		}
	}

	if (stack.length === 0) {
		return 0;
	}

	var candidate = stack[0];
	var counter = 0;
	var pos = [];
	var sum = [];
	for (i = 0; i < A.length; i++) {
		if (A[i] === candidate) {
			counter++;
			pos.push(i);
		}

		sum.push(counter);
	}

	var equi = [];
	if (counter <= parseInt(A.length / 2)) {
		return 0;
	} else {
		for (i = 0; i < sum.length; i++) {
			var leftMin = parseInt((i + 1) / 2);
			var rightMin = parseInt((sum.length - i - 1) / 2);

			if (sum[i] > leftMin && counter - sum[i] > rightMin) {
				equi.push(i);
			}
		}
	}

	return equi.length;
}
