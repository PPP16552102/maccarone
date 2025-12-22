// import tf from "@tensorflow/tfjs-node";

// export function createModel(inputShape: any) {
//   const model = tf.sequential();
//   model.add(
//     tf.layers.dense({
//       inputShape,
//       activation: "sigmoid",
//       units: 50,
//     }),
//   );
//   model.add(
//     tf.layers.dense({
//       activation: "sigmoid",
//       units: 50,
//     }),
//   );
//   model.add(
//     tf.layers.dense({
//       units: 1,
//     }),
//   );
//   model.compile({
//     optimizer: tf.train.sgd(0.01),
//     loss: "meanSquaredError",
//   });
//   return model;
// }
