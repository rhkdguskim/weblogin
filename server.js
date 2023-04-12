const express = require("express");
const session = require("express-session");
const sqlite3 = require("sqlite3").verbose();
const sqliteStoreFactory = require("express-session-sqlite").default

const SqliteStore = sqliteStoreFactory(session)
const app = express();

const db = new sqlite3.Database('./db/weblogin.db', err => {
    if(err) {
      return console.error(err.message);
    }
    console.log("Successful connection to the database 'weblogin.db'");
  });

app.use(session( {
    cookie: { maxAge: 86400000 },
    secret: 'secret-for-encoding-cookie',
    store: new SqliteStore({
      // for in-memory database
      // path: ':memory:'
      path: '/db/weblogin.db',
      // Session TTL in milliseconds
      ttl: 1234,
      // (optional) Session id prefix. Default is no prefix.
      prefix: 'sess:',
      // (optional) Triggers a timer in milliseconds to run a cleanup on expired session rows.
      // Default is 5 minutes.
      cleanupInterval: 300000,
      driver: sqlite3.Database
    }),
    resave: false,
    saveUninitialized: true
}));


app.get('/', (req,res) => {
    req.session.is_logined = true;
    req.session.save(() =>
    {
        res.send("Session Saved!!");
    })
    
})

app.listen(8000);