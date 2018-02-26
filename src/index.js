/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var trio = 0;

    for (var i = 0; i < preferences.length; i++) {
        var a = preferences[i];
        for (var j = i + 1; j < preferences.length; j++) {
            if (j + 1 === a) {
                var b = preferences[j];
                for (var k = i + 1; k < preferences.length; k++) {
                    if (k + 1 === b) {
                        var c = preferences[k];
                        if (c === i + 1) {
                            trio++;
                        }
                    }
                }
            }
        }
    }

    return trio;
}
