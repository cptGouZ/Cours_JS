const http = require('http');
var datas = [];

http.createServer((request, response) =>
    {
        setTimeout(function() {
                    response.setHeader('Access-Control-Allow-Origin', '*');
                    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
                    if (request.method == "POST") {
                        var contenu = "";
                        request.on('data', chunk => {
                            contenu += chunk.toString();
                        });
                        request.on('end', () => {
                            var objet = JSON.parse(contenu);
                            objet.uuid = guid();
                            console.log("serveur  : %s", JSON.stringify(objet));
                            datas.push(objet);
                        });
                        response.writeHead(200);
                        response.end();
                    }
                    else if (request.method == "GET") {
                        response.setHeader('content-type', 'application/json');
                        response.writeHead(200);
                        response.end(JSON.stringify(datas));
                    }
                    else if (request.method == "DELETE") {
                        var uuid = "";
                        request.on('data', chunk => {
                            uuid += chunk.toString();
                        });
                        request.on('end', () => {
                            var indexASupprimer;
                            datas.forEach(function (value,index) {
                                if(value.uuid==uuid)indexASupprimer=index;
                            })
                            console.log(uuid+", "+indexASupprimer);
                            if(indexASupprimer>=0) {
                                datas.splice(indexASupprimer, 1);
                            }
                        });

                        response.writeHead(200);
                        response.end();
                    }
                    else {
                        response.writeHead(201);
                        response.end();
                    }
                }
                ,1000*Math.floor(Math.random() * 2));
    }).listen(1234); // Démarrage du serveur sur le port 8080

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}