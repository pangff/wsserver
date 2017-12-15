'use strict';

const WebSocketServer = require('ws').Server;

module.exports = class PushServer {
    startup(done) {
        for(let i=0;i<1;i++){
            let port = 3200+i;
            console.log("port="+port);
            let wss = new WebSocketServer({
                port: port
            }, done);


            /**
             * 连接成功后初始化客户端ws属性
             * 发送初始化消息给客户端
             */
            wss.on('connection', (ws) => {

                try{
                    setInterval(()=>{
                        console.log("readyState2:",ws.readyState)
                    },100)
                    setTimeout(()=>{
                        console.log("readyState:",ws.readyState)
                        ws.send(`ok}`);
                    },1)

                    console.error("connected send connected!!")
                }catch(e){
                    console.error(`send error `+e);
                }
            });

            wss.on('error', (e) => {
                console.log("this.wss.onerror")
                console.log(e)
            });
        }

    }

};