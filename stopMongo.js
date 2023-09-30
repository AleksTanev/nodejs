const stopMongo = () => {
    return new Promise((resolve, reject) => {

        mongoDb.on("close", (code) => {
            console.log("on close, code is ", code)
            resolve("success")
        })

        mongoDb.on("error", reject)

        console.log("calling kill: pid is ", mongoDb.pid )
        kill(mongoDb.pid);
        console.log("called kill")
    })
}
