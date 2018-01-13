(async () => {
    try {
        const Hapi = require('hapi');
        const server = new Hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });

        server.route({
            method: 'POST',
            path: '/upload',
            config: {
                handler: (request, h) => {
                    return new Promise((resolve, reject) => {
                        let body = '';

                        request.payload.file.on('data', (data) => {
                            body += data;
                        });

                        request.payload.file.on('end', () => {
                            let result = {
                                description: request.payload.description,
                                file: {
                                    data: body,
                                    filename: request.payload.file.hapi.filename,
                                    headers: request.payload.file.hapi.headers
                                }
                            };

                            return resolve(JSON.stringify(result));
                        });

                        request.payload.file.on('error', (err) => {
                            return reject(err);
                        });
                    });
                },
                payload: {
                    output: 'stream',
                    parse: true,
                    allow: 'multipart/form-data'
                }
            }
        });

        await server.start();
    }
    catch (error) {
        console.log(error)
    }
})();
