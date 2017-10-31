'use strict';

const WebSocketServer = require('ws').Server;


module.exports = class PushServer {
    startup(done) {
        this.wss = new WebSocketServer({
            port: 3200
        }, done);

        /**
         * 连接成功后初始化客户端ws属性
         * 发送初始化消息给客户端
         */
        this.wss.on('connection', (ws) => {
            ws.send(`ok`);
        });

        this.wss.on('error', (e) => {
            console.log("this.wss.onerror")
            console.log(e)
        });
    }

};