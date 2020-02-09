/**
 * https://app.codility.com/demo/results/trainingYGH5E7-N5G/
 */

/**
 * 
 * 
  * N voracious fish are moving along a river. Calculate how many fish are alive.
  * 
  * 2 arrays: P - size of fish, Q - direction of those fish (i.e., directions are "0" and "1")
  * 
  * If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
  * If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
  * 
  * 
  */

function solution(A, B) {
	// write your code in JavaScript (Node.js 4.0.0)
	var i = 1;
	var fishs = [];
	fishs.push(0);

	while (i < A.length) {
		var curFish = i;
		var lastFish = fishs.pop();

		if (B[lastFish] === 0 || B[curFish] === 1) {
			fishs.push(lastFish);
			fishs.push(curFish);
			i++;
		} else if (B[lastFish] === 1 && B[curFish] === 0) {
			if (A[lastFish] > A[curFish]) {
				fishs.push(lastFish);
				i++;
			}

			if (fishs.length === 0) {
				fishs.push(curFish);
				i++;
			}
		}
	}

	return fishs.length;
}
