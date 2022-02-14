var createError = require('http-errors');
var path = require('path');

var express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wp_beadando"
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(bodyparser.json());

mysqlConnection.connect((err)=> {
  if(!err)
  console.log('Sikeres csatlakozás az adatbázishoz!');
  else
  console.log('Sikertelen csatlakozás az adatbázishoz!'+ JSON.stringify(err,undefined,2));
  });

var server = app.listen(8080,function(){});

//Előadók
app.get('/eloado' , (req, res) => {
  mysqlConnection.query('SELECT * FROM eloado', (err, rows) => {
    if (!err) res.send(rows);
    else
    console.log(err);
  })
});

app.get('/eloado/:id' , (req, res) => {
  mysqlConnection.query('SELECT * FROM eloado WHERE EloadoID = ?',[req.params.id], (err, rows) => {
    if (!err) res.send(rows);
    else
    console.log(err);
  })
});

app.post('/eloado', (req, res) => {
	mysqlConnection.query('INSERT INTO eloado set ?', req.body, (err) => {
    if (!err) res.send('Előadó hozzáadva');
    else
    console.log(err);
  });
});

app.put('/eloado/:id', (req, res) => {
	mysqlConnection.query('UPDATE eloado set ? WHERE EloadoID = ?',[req.body, req.params.id] ,(err) => {
    if (!err) res.send('Előadó módosítva!');
    else
    console.log(err);
  });
});

app.delete('/eloado/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM eloado WHERE EloadoID = ?', [req.params.id], (err) => {
  if (!err) res.send('Előadó sikeresen törölve!');
  else
  console.log(err);
  })
});

//Albumok
app.get('/album' , (req, res) => {
  mysqlConnection.query('SELECT * FROM album', (err, rows) => {
    if (!err) res.send(rows);
    else
    console.log(err);
  })
});

app.get('/album/:id' , (req, res) => {
  mysqlConnection.query('SELECT * FROM album WHERE AlbumID = ?',[req.params.id], (err, rows) => {
    if (!err) res.send(rows);
    else
    console.log(err);
  })
});

app.post('/album', (req, res) => {
  var data = {
    Cim: req.body.Cim,
    EloadoID : req.body.EloadoID
  }
	mysqlConnection.query('INSERT INTO album set ?', data, (err) => {
    if (!err) res.send('Album hozzáadva!');
    else
    console.log(err);
  });
});

app.put('/album/:id', (req, res) => {
	var data = {
			Cim: req.body.Cim,
      EloadoID : req.body.EloadoID
		}
	mysqlConnection.query('UPDATE album set ? WHERE AlbumID = ?',[data, req.params.id] ,(err) => {
    if (!err) res.send('Album módosítva!');
    else
    console.log(err);
  });
});

app.delete('/album/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM album WHERE AlbumID = ?', [req.params.id], (err) => {
  if (!err) res.send('Album sikeresen törölve!');
  else
  console.log(err);
  })
});

//Számok
app.get('/szam' , (req, res) => {
  mysqlConnection.query('SELECT * FROM szam', (err, rows) => {
    if (!err) res.send(rows);
    else
    console.log(err);
  })
});

app.get('/szam/:id' , (req, res) => {
  mysqlConnection.query('SELECT * FROM szam WHERE SzamID = ?',[req.params.id], (err, rows) => {
    if (!err) res.send(rows);
    else
    console.log(err);
  })
});

app.post('/szam', (req, res) => {
  var data = {
    SzamCim: req.body.SzamCim,
    Ar: req.body.Ar,
    AlbumID : req.body.AlbumID
  }
	mysqlConnection.query('INSERT INTO szam set ?', data, (err) => {
    if (!err) res.send('Szám hozzáadva!');
    else
    console.log(err);
  });
});

app.put('/szam/:id', (req, res) => {
	var data = {
			SzamCim: req.body.SzamCim,
      Ar: req.body.Ar,
      AlbumID : req.body.AlbumID
		}
	mysqlConnection.query('UPDATE szam set ? WHERE SzamID = ?',[data, req.params.id] ,(err) => {
    if (!err) res.send('Szám módosítva!');
    else
    console.log(err);
  });
});

app.delete('/szam/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM szam WHERE SzamID = ?', [req.params.id], (err) => {
  if (!err) res.send('Szám sikeresen törölve!');
  else
  console.log(err);
  })
});

module.exports = app;
