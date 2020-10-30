# nodeactyl.js ([Pterodactyl API Wrapper](https://pterodactyl.io))

Open source pterodactyl API wrapper for JavaScript.

---
Application:
- [Features](#Features)
- [Usage](#Usage)
  - [Logging In](#Logging-in) 
  - [FetchAll](#Get-all-users)
    - [users](#Get-all-users) 
    - [servers](#Get-all-servers) 
    - [nodes](#Get-all-nodes) 
    - [nests](#Get-all-nests) 
    - [locations](#Get-all-locations) 
  - [Get](#Get-a-user) 
    - [user](#Get-a-user) 
    - [server](#Get-a-server) 
    - [node](#Get-a-node) 
    - [nest](#Get-a-nest)
    - [location](#Get-a-location)
  - [Create](#Create-a-user) 
    - [user](#Create-a-user) 
    - [server](#Create-a-server)
  - [Delete](#Delete-a-user)
    - [user](#Delete-a-user)
    - [server](#Delete-a-server)
  - [Update](#Update-a-user)
    - [user](#Update-a-user)
---
# Application:

### **Features**
---

* Create `servers` and `users`.
* Delete `servers` and `users`.
* Update `users`.
* Get all `nodes`, `users`, `servers`, `nests`, `locations`.
* Get an induvidual `node`, `user`, `server`, `nest`, `location`.
#### *More features coming soon.*
</br>


### **Usage**
---

## **Logging in:**

```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

// Your Code...
```

---
<br>


## **Get all users:** 
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.fetchUsers(options).then(users => console.log(users));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
    "data": [{
            "id": 1,
            "external_id": null,
            "uuid": "6769acd2-a8b4-4994-b1ff-ffa6992b4713",
            "username": "root",
            "email": "root@example.com",
            "first_name": "Root",
            "last_name": ".",
            "language": "en",
            "root_admin": true,
            "2fa": true,
            "created_at": "2020-02-18T08:51:19+00:00",
            "updated_at": "2020-10-21T12:42:33+00:00"
        },
        {
            "id": 2,
            "external_id": null,
            "uuid": "b0c8745b-36fb-405f-b7a1-a33a50f842e8",
            "username": "example",
            "email": "example@example.com",
            "first_name": "example",
            "last_name": "account",
            "language": "en",
            "root_admin": false,
            "2fa": false,
            "created_at": "2020-02-18T10:25:29+00:00",
            "updated_at": "2020-09-19T22:24:20+00:00"
        }
    ],
    "info": {
        "total_amount": 2,
        "startedAt": 1603661663600,
        "endedAt": 1603661670919
    }
}
```
</details>
<br>

## **Get all servers:** 
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.fetchServers().then(servers => console.log(servers));
```
#### <ins>`Expected response:`</ins>

<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "data": [{
      "id": 1,
      "external_id": null,
      "uuid": "14ea435b-fec0-4ca1-8cae-6bab629a0f14",
      "identifier": "14ea435b",
      "name": "JS Server",
      "description": "",
      "suspended": false,
      "limits": {
        "memory": 0,
        "swap": 0,
        "disk": 0,
        "io": 500,
        "cpu": 0,
        "threads": null
      },
      "feature_limits": {
        "databases": 0,
        "allocations": 0,
        "backups": 0
      },
      "user": 2,
      "node": 1,
      "allocation": 51,
      "nest": 5,
      "egg": 15,
      "container": {
        "startup_command": "${STARTUP_CMD}",
        "image": "{IMAGE}",
        "installed": true,
        "environment": {
          "STARTUP_CMD": "bash",
          "STARTUP": "${STARTUP_CMD}",
          "P_SERVER_LOCATION": "US",
          "P_SERVER_UUID": "14ea435b-fec0-4ca1-8cae-6bab629a0f14",
          "P_SERVER_ALLOCATION_LIMIT": 0
        }
      },
      "updated_at": "2020-07-20T09:42:31+00:00",
      "created_at": "2020-02-18T10:56:06+00:00"
    },
    {
      "id": 3,
      "external_id": null,
      "uuid": "17c192ff-39ed-472d-a308-1de0bbcd9167",
      "identifier": "17c192ff",
      "name": "Bot Server",
      "description": "",
      "suspended": false,
      "limits": {
        "memory": 0,
        "swap": 0,
        "disk": 5000,
        "io": 500,
        "cpu": 0,
        "threads": null
      },
      "feature_limits": {
        "databases": 0,
        "allocations": 0,
        "backups": 0
      },
      "user": 25,
      "node": 1,
      "allocation": 52,
      "nest": 5,
      "egg": 15,
      "container": {
        "startup_command": "${STARTUP_CMD}",
        "image": "{IMAGE}",
        "installed": true,
        "environment": {
          "STARTUP_CMD": "bash",
          "STARTUP": "${STARTUP_CMD}",
          "P_SERVER_LOCATION": "US",
          "P_SERVER_UUID": "17c192ff-39ed-472d-a308-1de0bbcd9167",
          "P_SERVER_ALLOCATION_LIMIT": 0
        }
      },
      "updated_at": "2020-08-25T19:46:16+00:00",
      "created_at": "2020-02-18T10:59:09+00:00"
    }
  ],
  "info": {
    "total_amount": 2,
    "startedAt": 1603662511023,
    "endedAt": 1603662553597
  }
}
```
</details>
<br>

## **Get all nodes:** 
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.fetchNodes(options).then(nodes => console.log(nodes));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "data": [{
      "id": 1,
      "uuid": "b55f5fd4-494c-4d35-a6d3-66e61c060ddc",
      "public": true,
      "name": "Node 1 - Discord Bots",
      "description": "VM | Dedicated Server 1",
      "location_id": 3,
      "fqdn": "node.example.com",
      "scheme": "https",
      "behind_proxy": false,
      "maintenance_mode": false,
      "memory": 30720,
      "memory_overallocate": 10000,
      "disk": 204800,
      "disk_overallocate": 10000,
      "upload_size": 1024,
      "daemon_listen": 8080,
      "daemon_sftp": 2022,
      "daemon_base": "/srv/daemon-data",
      "created_at": "2020-02-18T09:30:18+00:00",
      "updated_at": "2020-09-22T11:07:46+00:00",
      "allocated_resources": {
        "memory": 1050,
        "disk": 681000
      }
    },
    {
      "id": 2,
      "uuid": "53598bf3-3558-48a4-8561-61ce61adf773",
      "public": false,
      "name": "Node 2  - Discord Bots",
      "description": "VM | Dedicated Server 1",
      "location_id": 3,
      "fqdn": "node.example.com",
      "scheme": "https",
      "behind_proxy": false,
      "maintenance_mode": false,
      "memory": 30720,
      "memory_overallocate": 10000,
      "disk": 204800,
      "disk_overallocate": 10000,
      "upload_size": 1024,
      "daemon_listen": 8080,
      "daemon_sftp": 2022,
      "daemon_base": "/srv/daemon-data",
      "created_at": "2020-02-18T09:30:54+00:00",
      "updated_at": "2020-09-22T11:07:43+00:00",
      "allocated_resources": {
        "memory": 0,
        "disk": 709000
      }
    }
  ],
  "info": {
    "total_amount": 2,
    "startedAt": 1603664644572,
    "endedAt": 1603664645334
  }
}
```
</details>
<br>

## **Get all nests:** 
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.fetchNests(options).then(nests => console.log(nests));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json 
{
  "data": [{
      "id": 1,
      "uuid": "687c3fb5-20b8-477d-a0ea-839274463435",
      "author": "support@pterodactyl.io",
      "name": "Minecraft",
      "description": "Minecraft - the classic game from Mojang. With support for Vanilla MC, Spigot, and many others!",
      "created_at": "2020-02-18T08:51:00+00:00",
      "updated_at": "2020-02-18T08:51:00+00:00"
    },
    {
      "id": 2,
      "uuid": "aff34dcb-7a85-4547-82b6-93caf31287ab",
      "author": "support@pterodactyl.io",
      "name": "Source Engine",
      "description": "Includes support for most Source Dedicated Server games.",
      "created_at": "2020-02-18T08:51:00+00:00",
      "updated_at": "2020-02-18T08:51:00+00:00"
    }
  ],
  "info": {
    "total_amount": 2,
    "startedAt": 1603664894936,
    "endedAt": 1603664895531
  }
}
```
</details>
<br>

## **Get all locations:** 
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.fetchLocations(options).then(locations => console.log(locations));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "success": true,
  "data": [
    {
      "id": 3,
      "short": "US",
      "long": "US LOCATION",
      "updated_at": "2020-05-02T04:32:58+00:00",
      "created_at": "2020-05-02T04:32:58+00:00"
    },
    {
      "id": 5,
      "short": "Gaming",
      "long": "Gaming Nodes. EU and US",
      "updated_at": "2020-08-10T12:56:38+00:00",
      "created_at": "2020-08-10T12:56:38+00:00"
    }
  ],
  "info": {
    "total_amount": 2,
    "startedAt": 1603840795885,
    "endedAt": 1603840805135
  }
}
```
</details>

--- 
<br>

## **Get a user:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.getUser(USERID, options).then(user => console.log(user));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json 
{
  "data": {
    "id": 2,
    "external_id": null,
    "uuid": "b0c8745b-36fb-405f-b7a1-a33a50f842e8",
    "username": "exampleaccount",
    "email": "example@example.com",
    "first_name": "firstName",
    "last_name": "lastName",
    "language": "en",
    "root_admin": true,
    "2fa": false,
    "created_at": "2020-02-18T10:25:29+00:00",
    "updated_at": "2020-09-19T22:24:20+00:00",
    "extras": {
      "servers": ["servers..."]
    }
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603665900917,
    "endedAt": 1603665901747
  }
}
```
</details>
<br>

## **Get a server:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.getServer(SERVERID, options).then(server => console.log(server));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "data": {
    "id": 1,
    "external_id": null,
    "uuid": "14ea435b-fec0-4ca1-8cae-6bab629a0f14",
    "identifier": "14ea435b",
    "name": "JS Server",
    "description": "",
    "suspended": false,
    "limits": {
      "memory": 0,
      "swap": 0,
      "disk": 0,
      "io": 500,
      "cpu": 0,
      "threads": null
    },
    "feature_limits": {
      "databases": 0,
      "allocations": 0,
      "backups": 0
    },
    "user": 2,
    "node": 1,
    "allocation": 51,
    "nest": 5,
    "egg": 15,
    "container": {
      "startup_command": "${STARTUP_CMD}",
      "image": "{IMAGE}",
      "installed": true,
      "environment": {
        "STARTUP_CMD": "bash",
        "STARTUP": "${STARTUP_CMD}",
        "P_SERVER_LOCATION": "US",
        "P_SERVER_UUID": "14ea435b-fec0-4ca1-8cae-6bab629a0f14",
        "P_SERVER_ALLOCATION_LIMIT": 0
      }
    },
    "updated_at": "2020-07-20T09:42:31+00:00",
    "created_at": "2020-02-18T10:56:06+00:00"
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603666633385,
    "endedAt": 1603666634042
  }
}
```
</details>
<br>

## **Get a node:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.getNode(NODEID, options).then(node => console.log(node));
```
#### <ins>`Expected response:`</ins>

<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "data": {
    "id": 2,
    "uuid": "53598bf3-3558-48a4-8561-61ce61adf773",
    "public": false,
    "name": "Node 2  - Discord Bots",
    "description": "VM | Dedicated Server 1",
    "location_id": 3,
    "fqdn": "node.example.com",
    "scheme": "https",
    "behind_proxy": false,
    "maintenance_mode": false,
    "memory": 30720,
    "memory_overallocate": 10000,
    "disk": 204800,
    "disk_overallocate": 10000,
    "upload_size": 1024,
    "daemon_listen": 8080,
    "daemon_sftp": 2022,
    "daemon_base": "/srv/daemon-data",
    "created_at": "2020-02-18T09:30:54+00:00",
    "updated_at": "2020-09-22T11:07:43+00:00",
    "allocated_resources": {
      "memory": 0,
      "disk": 709000
    }
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603666178333,
    "endedAt": 1603666179108
  }
}
```
</details>
<br>

## **Get a nest:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.getNest(NESTID, options).then(nest => console.log(nest));
```
#### <ins>`Expected response:`</ins>

<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "data": {
    "id": 1,
    "uuid": "687c3fb5-20b8-477d-a0ea-839274463435",
    "author": "support@pterodactyl.io",
    "name": "Minecraft",
    "description": "Minecraft - the classic game from Mojang. With support for Vanilla MC, Spigot, and many others!",
    "created_at": "2020-02-18T08:51:00+00:00",
    "updated_at": "2020-02-18T08:51:00+00:00",
    "extras": {
      "eggs": ["eggs..."],
      "servers": ["servers..."]
    }
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603667043772,
    "endedAt": 1603667049412
  }
}
```
</details><br>

## **Get a location:** 
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.getLocation(3, options).then(location => console.log(location));
```
#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "success": true,
  "data": {
    "id": 3,
    "short": "US",
    "long": "US LOCATION",
    "updated_at": "2020-05-02T04:32:58+00:00",
    "created_at": "2020-05-02T04:32:58+00:00"
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603840795885,
    "endedAt": 1603840805135
  }
}
```
</details>

---
<br>

## **Create a user:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.createUser("example", "example", "example@example.com", "ExampleFirst", "ExampleLast", false, "en")
.then(newUser => console.log(newUser));
```
#### <ins>`Arguments:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

*List of arguments: (use in order)*
| Argument | type | Description | Required? |
| --- | --- | --- | --- |
| Username | String | Users username. | Yes |
| Password | String | Users password. | Yes |
| Email | String | Users Email. | Yes |
| FirstName | String | Users first name. | Yes |
| LastName | String | Users last name. | Yes |
| IsAdmin | Boolean | Is the user admin? | Yes |
| Language | String | Language. [en/fr] | Yes |
</details>
<br>

#### <ins>`Expected response:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "success": true,
  "data": {
    "id": 1155,
    "external_id": null,
    "uuid": "9cc0ee54-640f-4bdb-ad84-3a193ada8644",
    "username": "example",
    "email": "example@example.com",
    "first_name": "ExampleFirst",
    "last_name": "ExampleLast",
    "language": "en",
    "root_admin": false,
    "2fa": false,
    "created_at": "2020-10-26T00:13:50+00:00",
    "updated_at": "2020-10-26T00:13:50+00:00"
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603671229920,
    "endedAt": 1603671230779
  }
}
```
</details> <br>

## **Create a server:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.createServer("test", 2, 5, 16, 3, 0, -1, 0, 500, 0, null, null, {
        "INSTALL_REPO": null,
        "INSTALL_BRANCH": null,
        "USER_UPLOAD": "0",
        "AUTO_UPDATE": "0",
        "BOT_JS_FILE": "index.js"
    }, {
        databases: 1,
        allocations: 0,
        backups: 5
    })
    .then(newServer => console.log(newServer));
```
#### <ins>`Arguments:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

*List of arguments: (use in order)*
| Argument | type | Description | Required? |
| --- | --- | --- | --- |
| ServerName | String | Character limits: a-z A-Z 0-9 _ - . and [Space]. | Yes |
| UserID | Number | Users ID. | Yes |
| NestID | Number | the Nest that this server will be grouped under. | Yes |
| EggID | Number | the Egg will define how this server should operate. | Yes |
| Location | Number | Node location. | Yes |
| CPU | Number | The amount of CPU Power the server can use. (100 = 1 core) | Yes |
| RAM | Number | The maximum amount of memory allowed for this container. | Yes |
| Swap | Number | Setting this to 0 will disable swap space on this server. Setting to -1 will allow unlimited swap | Yes |
| Disk | Number | This server will not be allowed to boot if it is using more than this amount of space. | Yes |
| IO | Number | The IO performance of this server relative to other running containers on the system. Value should be between 10 and 1000 (please keep at 500) | Yes |
| DockerImage | [String\|null] | This is the default Docker image that will be used to run this server. Can be null (if null the wrapper will get the dockerimage from the egg) | Yes |
| StartupCmd | [String\|null] | Start Up Command. Can be null (if null the wrapper will get the default startupcmd from the egg) | Yes |
| environment | Object | enviroment (The information the egg requires.) | Yes |
| option | Object | Feature Limits: [databases, allocations, backups] | No |
| option.databases | Number | Amount of databases this server is allowed to have. (Default: 0) | No |
| option.allocations | Number | Amount of allocations this server is allowed to have. (Default: 0) | No |
| option.backups | Number | Amount of backups this server is allowed to have. (Default: 0) | No |
</details>
<br>

#### <ins>`Expected response:`</ins>

<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "success": true,
  "data": {
    "id": 4973,
    "external_id": null,
    "uuid": "243b320e-c925-4260-a3bd-d820efc0f8d8",
    "identifier": "243b320e",
    "name": "test",
    "description": "",
    "suspended": false,
    "limits": {
      "memory": 0,
      "swap": -1,
      "disk": 0,
      "io": 500,
      "cpu": 0,
      "threads": null
    },
    "feature_limits": {
      "databases": 0,
      "allocations": 0,
      "backups": 0
    },
    "user": 2,
    "node": 1,
    "allocation": 4295,
    "nest": 5,
    "egg": 16,
    "container": {
      "startup_command": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi && /usr/local/bin/npm install --production && /usr/local/bin/node /home/container/{{BOT_JS_FILE}}",
      "image": "{IMAGE}",
      "installed": false,
      "environment": {
        "INSTALL_REPO": "",
        "INSTALL_BRANCH": "",
        "USER_UPLOAD": "0",
        "AUTO_UPDATE": "0",
        "BOT_JS_FILE": "index.js",
        "STARTUP": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi && /usr/local/bin/npm install --production && /usr/local/bin/node /home/container/{{BOT_JS_FILE}}",
        "P_SERVER_LOCATION": "US",
        "P_SERVER_UUID": "243b320e-c925-4260-a3bd-d820efc0f8d8",
        "P_SERVER_ALLOCATION_LIMIT": 0
      }
    },
    "updated_at": "2020-10-26T11:06:22+00:00",
    "created_at": "2020-10-26T11:06:22+00:00"
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603710365485,
    "endedAt": 1603710383204
  }
}
```
</details>

--- 
<br>

## **Delete a user:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.deletUser(USERID).then(response => console.log(response));
```
#### <ins>`Expected response:`</ins>

<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "success": true,
  "info": { "startedAt": 1603714948104, "endedAt": 1603714949005 }
}
```
</details> <br>

## **Update a user:**
 
#### <ins>`Code:`</ins>
```js
const api = require('nodeactyl.js').Application;

api.login("PanelURL", "APIKey");

api.updateUser(58, "example", "PASSWORD", "example@example.com", "Example", "User", false, 'en').then(response => console.log(response));
```
#### <ins>`Arguments:`</ins>
<details>
<summary>
<i>Click me!</i>
</summary>

*List of arguments: (use in order)*
| Argument | type | Description | Required? |
| --- | --- | --- | --- |
| UserID | Number | Users ID. | Yes |
| Username | String | Users new username. (nullable) | Yes |
| Password | String | Users new password. (nullable) | Yes |
| Email | String | Users new email. (nullable) | Yes |
| FirstName | String | Users new first name. (nullable) | Yes |
| LastName | String | Users new last name. (nullable) | Yes |
| IsAdmin | Boolean | Is the user admin? (true/false) (nullable) | Yes |
| Language | String | Language, Normally: [en/fr] (nullable) | Yes |
</details>
<br>

#### <ins>`Expected response:`</ins>

<details>
<summary>
<i>Click me!</i>
</summary>

```json
{
  "success": true,
  "data": {
    "id": 58,
    "external_id": null,
    "uuid": "8a8fd2a0-57e3-49f6-82ef-07c02c426be9",
    "username": "example",
    "email": "example@example.com",
    "first_name": "Example",
    "last_name": "User",
    "language": "en",
    "root_admin": false,
    "2fa": false,
    "created_at": "2020-04-22T09:47:03+00:00",
    "updated_at": "2020-10-28T06:01:16+00:00"
  },
  "info": {
    "total_amount": 1,
    "startedAt": 1603864871881,
    "endedAt": 1603864877319
  }
}
```
</details>

---
<br>