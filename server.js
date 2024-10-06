console.log("server run")
const log = (function () {
    return function () {
        return console.log("hello world")
    }()
})()
