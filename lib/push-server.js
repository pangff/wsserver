'use strict';

const WebSocketServer = require('ws').Server;

module.exports = class PushServer {
    startup(done) {
        for(let i=0;i<16;i++){
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
                ws.send(`ok`);
            });

            wss.on('error', (e) => {
                console.log("this.wss.onerror")
                console.log(e)
            });
        }

    }

};