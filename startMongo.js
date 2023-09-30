const {exec} = require("child_process")

let mongoContainerId
const mongoDb = exec("docker run -d -p 27017:27017 --rm mongo:latest", (err, stdout) => {
    if (err) {
        throw err;
    }

    mongoContainerId = stdout
    console.log("mongo stdout: ", stdout);
});

mongoDb.on("exit", (code) => console.log("exited with code: ", code))

setTimeout(() => {
    console.log("killing mongodb");

    exec(`docker kill ${mongoContainerId}`)

    console.log("after docker kill")
}, 10000);

