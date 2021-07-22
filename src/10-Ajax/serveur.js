const http = require('http');
var marins = ["M1","M2"];

http.createServer((request, response) =>
    {
        setTimeout(function() {
                    response.setHeader('Access-Control-Allow-Origin', '*');
                    if (request.method == "POST") {
                        var contenu = "";
                        request.on('data', chunk => {
                            contenu += chunk.toString();
                        });
                        request.on('end', () => {
                            console.log("serveur  : %s", contenu);
                            marins.push(contenu);
                        });
                        response.writeHead(200);
                        response.end();
                    }
                    else if (request.method == "GET") {
                        response.setHeader('content-type', 'application/json');
                        response.writeHead(200);
                        console.log(JSON.stringify(marins));
                        response.end(JSON.stringify(marins));
                    }
                }
                ,1000*Math.floor(Math.random() * 5));
    }).listen(8080); // Démarrage du serveur sur le port 8080