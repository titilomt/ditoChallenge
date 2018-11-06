const request = require("request");

module.exports = (app, db) => {
    app.get("/", (req, res) => {
        request("https://storage.googleapis.com/dito-questions/events.json", {json: true}, (err, response, body) => {

            let eventTemplate = {
                timestamp: "string",
                revenue: 0.0,
                transaction_id: "string",
                store_name: "string",
                products: []
            };

            let productTemplate = {
                name: "string",
                price: 0.0
            }

            let eventsMap = new Map();
            body.events.forEach(event => {
                const id = this.filterCustomData(event.custom_data, "transaction_id");
                
                if (eventsMap.has(id)) {
                    let eventsArr = eventsMap.get(id);
                    eventsArr.push(event);
                    eventsMap.set(id, eventsArr);
                } else eventsMap.set(id, [event]);
            });

            timeline = [];
            eventsMap.forEach(events => {
                eventTemplate.products = [];

                events.forEach(event => {
                    switch (event.event) {
                        case "comprou":
                            eventTemplate.timestamp      = event.timestamp;
                            eventTemplate.revenue        = event.revenue;
                            eventTemplate.transaction_id = this.filterCustomData(event.custom_data, "transaction_id");
                            eventTemplate.store_name     = this.filterCustomData(event.custom_data, "store_name");
                            break;
                        case "comprou-produto":
                            productTemplate.name  = this.filterCustomData(event.custom_data, "product_name");
                            productTemplate.price = this.filterCustomData(event.custom_data, "product_price");
                            eventTemplate.products.push(Object.assign({}, productTemplate));
                            break;
                    }
                });

                timeline.push(Object.assign({}, eventTemplate));
            });

            timeline.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0));
            res.send(timeline);
        });
    });

    this.filterCustomData = (custom_data, keyString) => {
        return custom_data
            .filter(data => data.key === keyString)
            .shift()
            .value;
    };
};
