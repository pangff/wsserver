var ws = require("nodejs-websocket")

var server = ws.createServer(function (conn) {
    conn.sendText("ok")
    console.log("New connection")
    setTimeout(()=>{
        conn.sendText("ok2")
    },2000)

    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(3200)