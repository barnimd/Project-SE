function gaussianElimination(a, b) {
    let n = b.length;

    // Forward Elimination
    for (let k = 0; k < n - 1; k++) {
        for (let i = k + 1; i < n; i++) {
            let factor = a[i][k] / a[k][k];
            for (let j = k + 1; j < n; j++) {
                a[i][j] -= factor * a[k][j];
            }
            b[i] -= factor * b[k];
        }
    }

    let x = Array(n).fill(0);

    // Back Substitution
    x[n - 1] = b[n - 1] / a[n - 1][n - 1];
    for (let i = n - 2; i >= 0; i--) {
        let sum = b[i];
        for (let j = i + 1; j < n; j++) {
            sum -= a[i][j] * x[j];
        }
        x[i] = sum / a[i][i];
    }

    // Display the solution
    return x;
}

function getMatrixValues() {
    const rows = document.querySelectorAll('.matrix-row');
    let a = [];
    let b = [];

    rows.forEach(row => {
        let rowValues = [];
        let inputs = row.querySelectorAll('input');
        inputs.forEach((input, index) => {
            if (index < inputs.length - 1) {
                rowValues.push(parseFloat(input.value));
            } else {
                b.push(parseFloat(input.value));  // Store the value of b
            }
        });
        a.push(rowValues);
    });

    return {a, b};
}

function solveMatrix() {
    let { a, b } = getMatrixValues();
    let result = gaussianElimination(a, b);
    displaySolution(result);
}

function displaySolution(solution) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h3>Solution:</h3>';
    solution.forEach((value, index) => {
        resultDiv.innerHTML += `<p>x${index + 1} = ${value.toFixed(2)}</p>`;
    });
}
