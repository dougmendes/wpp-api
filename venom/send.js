const venom = require('venom-bot')

function send(cell,msg){
    venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });
    
    async function start(client) {
        cell = cell+'@c.us'
        await client
            .sendText(cell, msg)
    }
    return('202 - Success');
}

module.exports = { send };