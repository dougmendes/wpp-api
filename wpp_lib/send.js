const venom = require('venom-bot')

function send(cell,msg){
    try {
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
        return(202);
    } catch (err) {
        return(err)
    }

}

module.exports = { send };