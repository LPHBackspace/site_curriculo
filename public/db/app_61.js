const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculo.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../"));

app.use(express.json());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/getprojects', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
   var sql = 'SELECT * FROM projects';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		else console.log(sql);
		res.json(rows);
	});
	db.close(); // Fecha o banco
});



// Insere um registro (é o C do CRUD - Create)
app.post('/insertdata', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO courses(image, name, description, link) values (" + data+")" 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		else console.log(sql);
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/curriculo', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin',
	'*');
	
	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM tbUser WHERE userId = 2';
	db.get(sql, [], (err, row) => {
	if (err) {
	throw err;
	}
	res.write('<!DOCTYPE html> \n<meta charset="UTF-8">\n<head> \n\t<title>MEUCURRÍCULO</title><style>.linha { border-bottom: solid 1px black;}</style>\n</head> \
	\n<body> \
	\n\t<div id="main"> \
	\n\t\t<h1>MEU CURRÍCULO</h1>');
	res.write('\n\t\t<div class="linha">' + row.title + '</div> \n\t</div>');
	res.write('\n</body> \n</html>');
	});
	});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});