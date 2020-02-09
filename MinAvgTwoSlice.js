/**
 * https://app.codility.com/demo/results/trainingU6BWPU-ADW/
 */

function solution(A) {
	let two = [];
	let three = [];
	let avg = Infinity;
	let index = -1;

	for (let i = 1; i < A.length; i++) {
		two[i] = (A[i] + A[i - 1]) / 2;
		if (two[i] < avg) {
			avg = two[i];
			index = i - 1;
		}
		if (i > 1) {
			three[i] = (A[i] + A[i - 1] + A[i - 2]) / 3;
			if (three[i] < avg) {
				avg = three[i];
				index = i - 2;
			}
		}
	}

	return index;
}
