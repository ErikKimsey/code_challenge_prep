/**
 * https-//codility.com/demo/results/trainingDQZTYA-ZGD/
 * 
 * Compute the number of intersections in a sequence of discs
 * 
 */

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var items = [];
	var intersections = 0;
	const LIMIT = 10000000;

	for (var i = 0; i < A.length; i++) {
		items.push({
			base: i,
			start: i - A[i],
			end: i + A[i]
		});
	}

	items.sort(function(a, b) {
		return a.start - b.start;
	});

	var sameStart = 0;
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var j = i + 1;

		while (items[j] && item.end >= items[j].start) {
			if (++intersections > LIMIT) return -1;

			if (item.start === items[j++].start) {
				sameStart++;
			}
		}

		sameStart = 0;
	}

	return intersections;
}
