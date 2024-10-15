public class NaiveGaussianElimination {
    // Method to execute Gaussian Elimination
    public static void gaussianElimination(double[][] a, double[] b) {
        int n = b.length;  // Get the size of matrix
        // Forward Elimination phase
        for (int k = 0; k < n - 1; k++) {  // Loop through each column (except the last one)
            for (int i = k + 1; i < n; i++) {  // Eliminate variables below the diagonal
                double factor = a[i][k] / a[k][k];  // Calculate the factor for elimination
                for (int j = k + 1; j < n; j++) {
                    a[i][j] -= factor * a[k][j];  // Modify the matrix row
                }
                b[i] -= factor * b[k];  // Adjust the right-hand side values
            }
        }
        // Array to store the solution
        double[] x = new double[n];
        // Back Substitution phase
        x[n - 1] = b[n - 1] / a[n - 1][n - 1];  // Solve the last variable
        for (int i = n - 2; i >= 0; i--) {  // Solve the remaining variables from bottom to top
            double sum = b[i];
            for (int j = i + 1; j < n; j++) {
                sum -= a[i][j] * x[j];  // Subtract the known values
            }
            x[i] = sum / a[i][i];  // Solve for the current variable
        }
        // Print the solution
        System.out.println("Solution: ");
        for (int i = 0; i < n; i++) {
            System.out.println("x" + (i + 1) + " = " + x[i]);  // Display each variable value
        }
    }
    public static void main(String[] args) {
        // Define the matrix of coefficients (can added more than 4x4
        double[][] a = {
            {1, -1, 2, 1},  // Equation 1: x1 - x2 + 2x3 + x4 = 1
            {3, 2, 1, 4},   // Equation 2: 3x1 + 2x2 + x3 + 4x4 = 1
            {5, 8, 6, 3},   // Equation 3: 5x1 + 8x2 + 6x3 + 3x4 = 1
            {4, 2, 5, 3}    // Equation 4: 4x1 + 2x2 + 5x3 + 3x4 = -1
        };
        // Define the right-hand side values (b)
        double[] b = {1, 1, 1, -1};  // Results of the 4 equations
        // Call the Gaussian Elimination function to solve the system
        gaussianElimination(a, b);
    }
}