# App features

1. Facebook authentication and authorization.
2. Using google map API to retrieve needed information for the user location.
3. Store neede information from facebook into Redis(Mongodb) local server.


# Fast start

For Angular 2 development information and wiki, look here:
 - [Angular2-Seed](https://github.com/mgechev/angular2-seed) Wow wow it's our parent :)
 - [Angular2-Seed-WIKI](https://github.com/mgechev/angular2-seed/wiki) Wiki Information about Seed!
 - [Angular2-Seed-Advanced](https://github.com/mgechev/angular2-seed-advanced) It's a [Nathan's Walker](https://github.com/NathanWalker) child seed for multi-platform Angular2 apps.

```bash
git clone --depth 1 https://github.com/IpIvanov/angular2-seed-express
cd hitchhiking-app
# install the project dependencies
$ npm install
# watches your files and uses livereload by default
$ npm start
# api document for the app
# $ npm run build.docs

# dev build
$ npm run build.dev
# prod build
$ npm run build.prod

# run Redis
$ src/redis-server
# stop Redis
$ src/redis-cli
$ shutdown SAVE

# run Express server (keep in touch, only after `npm run build.prod` )
$ node app.server.prod.js
# or development
$ node app.server.dev.js

# run server in daemon mode
$ pm2 start app.server.prod.js
```

# Need to know

Before starting development. Run you development server:
```sh
# run dev server
$ node app.server.dev.js
```

# Express Server

Express server run for prod build.

```sh
# run Express server (keep in touch, only after `npm run build.prod` )
# keep in mind that prod build will be builded with prod env flag
$ node app.server.prod.js

# run Express server in dev mode
$ node app.server.dev.js
```

# Daemonize Server

For daemonize your server I propose to uze `PM2`.
```sh
# before daemonize production server `npm run build.prod`
$ pm2 start app.server.prod.js

# restart only your project
$ pm restart <id>
# restart all project on daemon
$ pm2 restart all

# in cluster mode ( example 4 workers )
$ pm2 start app.server.prod.js -i 4
```

More details about [PM2](http://pm2.keymetrics.io/)


# Express Configuration

`src/server/index.js`

```ts
var _clientDir = '../client'; // Dist prod folder.
```

`app.server.dev.js`
```js
// Configure server Port ( keep in mind that this important if you will use reverse-proxy)
// Dev mode will give you only middleware.
// WARNING! DEPEND ON YOUR Angular2 SEED PROJECT API CONFIG!
/**
 * @ng2 Server Runner `Development`.
 */
require('./server')(9001, 'dev');
```

`app.server.prod.js`
```js
// Configure server Port ( keep in mind that this important if you will use reverse-proxy)
// Prod mode give you middleware + static.
// WARNING! DEPEND ON YOUR Angular2 SEED PROJECT API CONFIG!
/**
 * @ng2 Server Runner `Production`.
 */
require('./server')(9000);
```

# Redis Download/Install

 - About [Redis](http://redis.io/).
 - [Download](http://redis.io/download#download) and [install](http://redis.io/download#installation) latest stable version of Redis.
 - [Documentation](http://redis.io/documentation) about Redis.

# Redis Start

After installation we need to start our server:
```sh
# start server
$ src/redis-server
```

# Redis More Settings + Daemonize

 - Redis [Persistence](http://redis.io/topics/quickstart#redis-persistence)
 - Redis [More Properties](http://redis.io/topics/quickstart#installing-redis-more-properly)

# MongoDB

 - In progress

# MySQL

 - In progress


# License

MIT
