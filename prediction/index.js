// Import TensorFlow.js library
const tf = require('@tensorflow/tfjs-node');

// Define your series of numbers - crime data for previous years for a district
const series = [9125,
    9091,
    8459,
    5725,
    5909,
    6479,
    6560,
    7371];

// Prepare training data
const xs = tf.tensor1d(series.map((num, index) => index / series.length));  // Normalizing input
const ys = tf.tensor1d(series.map(num => num / 10));  // Normalizing output

// Define a simple sequential model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compile the model
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Train the model
async function trainModel() {
    await model.fit(xs, ys, { epochs: 10000 });
    console.log('Model training completed.');
}

trainModel().then(() => {
    // Predict the next number in the series
    const nextNumberIndex = series.length / series.length;  // Normalizing input
    const prediction = model.predict(tf.tensor2d([nextNumberIndex], [1, 1])).dataSync()[0] * 10;  // Denormalizing output
    console.log('Predicted next number:', prediction);
});
