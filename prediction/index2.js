const stats = require('stats-lite');

// Define the crime data
const crimeData = [2345,
    3164,
    3242,
    2027,
    2211,
    2090,
    1902,
    2329];

// Define function to calculate mean absolute error
function calculateMAE(actual, predicted) {
    return stats.mean(actual.map((value, index) => Math.abs(value - predicted[index])));
}

// Fit ARIMA model and make predictions
function fitARIMAModelAndPredict(data, futureSteps) {
    // Fit ARIMA model (using a simplified approach, there are more advanced libraries available)
    const mean = stats.mean(data);
    const diffs = data.map(value => value - mean);
    const nextYearPrediction = mean + stats.mean(diffs); // Simplified prediction for next year

    // Generate future predictions
    const predictions = Array(futureSteps).fill(nextYearPrediction);
    
    // Calculate MAE
    const mae = calculateMAE(data.slice(-futureSteps), predictions);

    return { predictions, mae };
}

// Predict next year's crime count using ARIMA
const { predictions, mae } = fitARIMAModelAndPredict(crimeData, 1);
console.log(`Predicted crime count for next year using ARIMA: ${predictions[0].toFixed(2)}`);
console.log(`Mean Absolute Error (MAE): ${mae.toFixed(2)}`);
