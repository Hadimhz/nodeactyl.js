const fetch = require('node-fetch');

module.exports = () => {
    let cred = require('../Application').cred();
    let start = Date.now();
    return new Promise(async (resolve, reject) => {
        let users = []
        let res = await fetch(cred.url + "/api/application/users", {
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

        users = users.concat(data.data);
        if (data.meta.pagination.current_page != data.meta.pagination.total_pages) {
            for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                fetch(cred.url + "/api/application/users?page=" + i, {
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": 'Bearer ' + cred.APIKey,
                        "Accept": 'application/json'
                    }
                }).then(x => x.json()).then(x => {
                    users = users.concat(x.data);
                    if (x.meta.pagination.total == users.length)
                        resolve({
                            success: true,
                            data: users.map(x => x.attributes),
                            info: {
                                total_amount: users.length,
                                startedAt: start,
                                endedAt: Date.now(),
                            }
                        });
                });
            }
        } else {
            resolve({
                success: true,
                data: users.map(x => x.attributes),
                info: {
                    total_amount: users.length,
                    startedAt: start,
                    endedAt: Date.now(),
                }
            });
        }
    });

}