/** With Cluster */
const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}가 종료됐습니다.`);
    cluster.fork();
  });
} else {
  const app = require("./src/app");
  const PORT = process.env.PORT || 8080;

  console.log(`Worker ${process.pid} started`);
  app.listen(PORT, () => {
    console.log(`Server on : http://localhost:${PORT}`);
  });
}


/** Without Cluster */
// const app = require("./src/app");
// const PORT = process.env.PORT || 8080;

// // console.log(`Worker ${process.pid} started`);
// app.listen(PORT, () => {
//   console.log(`Server on : http://localhost:${PORT}`);
// });
