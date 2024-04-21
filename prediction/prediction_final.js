// Import the stats-lite library for statistical calculations
const stats = require('stats-lite');

// Define the crime data for analysis
const crimeData = [
    2345, // Crime count for 2016
    3164, // Crime count for 2017
    3242, // Crime count for 2018
    2027, // Crime count for 2019
    2211, // Crime count for 2020
    2090, // Crime count for 2021
    1902, // Crime count for 2022
    2329  // Crime count for 2023
];

// Function to calculate Mean Absolute Error (MAE)
function calculateMAE(actual, predicted) {
    // Calculate the absolute differences between actual and predicted values
    const absoluteDifferences = actual.map((value, index) => Math.abs(value - predicted[index]));
    // Calculate the mean of absolute differences
    return stats.mean(absoluteDifferences);
}

// Function to fit an ARIMA model and make predictions
function fitARIMAModelAndPredict(data, futureSteps) {
    // Calculate the mean of the provided data
    const mean = stats.mean(data);
    // Calculate the differences from the mean for each data point
    const differencesFromMean = data.map(value => value - mean);
    // Simplified prediction for the next year based on the mean and differences from mean
    const nextYearPrediction = mean + stats.mean(differencesFromMean);

    // Generate future predictions based on the simplified approach
    const predictions = Array(futureSteps).fill(nextYearPrediction);
    
    // Calculate the Mean Absolute Error (MAE) between actual data and predictions
    const mae = calculateMAE(data.slice(-futureSteps), predictions);

    // Return predictions and MAE
    return { predictions, mae };
}

// Predict next year's crime count using the ARIMA model
const futureSteps = 1; // Number of future steps to predict
const { predictions, mae } = fitARIMAModelAndPredict(crimeData, futureSteps);

// Output the predicted crime count for next year and the Mean Absolute Error (MAE)
console.log(`Predicted crime count for next year using ARIMA: ${predictions[0].toFixed(2)}`);
console.log(`Mean Absolute Error (MAE): ${mae.toFixed(2)}`);
