const request = require("request");

module.exports = (app, db) => {
    app.get("/", (req, res) => {
        request("https://storage.googleapis.com/dito-questions/events.json", {json: true}, (err, response, body) => {

        let eventTemplate = {
                timestamp: "string",
                revenue: 0.0,
                transaction_id: "string",
                store_name: "string",
                products: [
                    {
                        name: "string",
                        price: 0.0
                    }
                ]
            };

            let events = Map();
            body.events.forEach(event => {
                const id = event.custom_data
                    .filter(data => data.key === "transaction_id")
                    .shift()
                    .value;
                
                events.add();
            });

            res.send(null);
            // const ids = [...(new Set(body.events.map(event => {
            //     return event.custom_data
            //         .filter(data => data.key === "transaction_id")
            //         .shift()
            //         .value;
            // })))];

            // const events = ids.map(id => {
            //     return body.events.filter(event => event.custom_data.filter)
            // });
        });
    });
};
