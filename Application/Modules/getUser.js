const fetch = require('node-fetch');

/**
 * 
 * @param {Number} ID User ID you're trying to fetch.
 */
function getUser(ID) {
    let cred = require('../Application').cred();
    let start = Date.now();
    return new Promise(async (resolve, reject) => {
        let res = await fetch(cred.url + "/api/application/users/" + ID + "?include=servers", {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + cred.APIKey,
                "Accept": 'application/json'
            }
        });
        let data = await res.json();
        data = data.attributes;
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
        data.extras = {
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

module.exports = getUser;