module.exports = {
    init: init
}

let cache = {
};

function init(app, routeName) {
    app.get(`/api/${routeName}`, (request, response) => {
        if (!cache[routeName]) {
            cache[routeName] = [];
        }
        
        if (request.query.inspect === "") {
            response.json(cache[routeName]);
            return;
        }

        cache[routeName].push(`URL: ${request.url} Query: ${JSON.stringify(request.query)}  Body: ${request.body}`);
        response.end('ok');
    });
}