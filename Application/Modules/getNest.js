const fetch = require('node-fetch');

module.exports = (ID) => {
    let cred = require('../Application').cred();
    if (ID == null) ID = 0;
    let start = Date.now();
    return new Promise(async (resolve, reject) => {
        let res = await fetch(cred.url + "/api/application/nests/" + ID + "?include=eggs, servers", {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + cred.APIKey,
                "Accept": 'application/json'
            }
        });
        let data = await res.json();
        if (data.errors != null) {
            resolve({
                success: false,
                error: (data.errors.length == 1 ? data.errors[0] : data.errors),
                info: {
                    startedAt: start,
                    endedAt: Date.now(),
                }
            });
        };
        data = data.attributes;
        data.extras = {
            eggs: data.relationships.eggs.data.map(x => x.attributes),
            servers: data.relationships.servers.data.map(x => x.attributes)
        };
        resolve({
            success: true,
            data: data,
            info: {
                total_amount: 1,
                startedAt: start,
                endedAt: Date.now(),
            }
        });
    });
}