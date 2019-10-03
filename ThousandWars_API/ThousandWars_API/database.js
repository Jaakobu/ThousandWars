const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
    origin:['http://localhost:3000'], // <-- l'url de ton react
    methods:['GET','POST'],
    credentials: true // enable set cookie
}));
app.use(express.json())

var session = require('express-session')
app.use(session({
    secret: 'keyboard-cat',
    // cookie: { secure: true }
    cookie: { maxAge: 60000000, httpOnly: false },
    resave: false,
    saveUninitialized: false,
}))

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'mysql-jeanvstjohn.alwaysdata.net',
  user: '180704_thousandw',
  password: 'ThousandWars',
  database: 'jeanvstjohn_thousandwars'
})

connection.connect()

// app.use((req, res, next) => {
//     req.session.reload
//     console.log('verif', req.session.id);
//     if(req.session.user || req.url.indexOf('/user/authentification') !== -1) {
//         next();
//     }
//     res.status = 401;
//     res.send('Not Authenticated');
// })
// AUTHENTIFICATION
app.post('/user/authentification', function (req, res, next) {
		let email = req.body.email;
		let pass = req.body.pass;
    connection.query('SELECT * '+
    'FROM User '+
    'WHERE email = "'+email+'" AND password = "'+pass+'"', function (err, rows, fields){
        if (err) return next(err);
        // req.session.user = rows[0];
				// console.log('auth',req.session.id)
				// console.log('rows: ', rows[0]);
				if(!rows[0])
					return next(err)
				res.end()
					
				
    })
})
// // LOGOUT
// app.get('/logout', function (req, res, next) {
//     req.session.destroy((err) => {
//         if(err) {
//             return console.log(err);
//         }
//         res.end();
//     });
// })

app.get('/', function(req, res) {
    res.send('Hello World!')
})

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})
// ****************************** USER ******************************
// AFFICHAGE USERS
app.get('/user', function (req, res, next) {
    connection.query('SELECT id, email, password, pseudo '+
    'FROM User ', function (err, rows, fields){
        if (err) return next(err)
        res.send(rows)
    })
})
// AFFICHAGE USER
app.get('/user/:id', function (req, res, next) {
    let theId = req.params.id;
    connection.query('SELECT id, email, password, pseudo '+
    'FROM User '+
    'WHERE User.id = ?', theId, function (err, rows, fields){
        if (err) return next(err);
        res.send(rows);
    })
})
// INSERTION USER
app.post('/user/addUser', function (req, res, next){
    connection.query('INSERT INTO User (email, password, pseudo) VALUES (?, ?, ?)', [req.body.email, req.body.password, req.body.username], function (err, rows, fields){
        if (err) return next(err);
        connection.query('SELECT id FROM User WHERE email = ?', req.body.email, function(err, rows, fields){
            if (err) return next(err);
            let theId = rows[0].id;
            connection.query('INSERT INTO Wallet VALUES (1, ?, 50)', theId, function (err, rows, fields){ if (err) return next(err); }),
            connection.query('INSERT INTO Wallet VALUES (2, ?, 50)', theId, function (err, rows, fields){ if (err) return next(err); }),
            connection.query('INSERT INTO Wallet VALUES (3, ?, 50)', theId, function (err, rows, fields){ if (err) return next(err); }),
            connection.query('INSERT INTO Based VALUES (?, 3, 1)', theId, function (err, rows, fields){
                if (err) return next(err);
                res.end();
            })
        })
        
        res.send(rows);
    })
})
// AFFICHAGE RESOURCE USER
app.get('/user/resource/:id', function (req, res, next) {
    let theId = req.params.id;
    connection.query('SELECT id_User, nb, name '+
    'FROM Wallet '+
    'INNER JOIN Resource ON Resource.id = Wallet.id '+
    'WHERE id_User = ?', theId, function (err, rows, fields){
        if (err) return next(err);
        res.send(rows);
    })
})
// ENVOIE RESOURCE USER
app.post('/user/resource/update', function (req, res, next){
    connection.query('UPDATE Wallet SET nb = ? WHERE id = 3 AND id_User = ?', [req.body.woodWallet, req.body.idUser], function (err, rows, fields){ if (err) return next(err); }),
    connection.query('UPDATE Wallet SET nb = ? WHERE id = 2 AND id_User = ?', [req.body.stoneWallet, req.body.idUser], function (err, rows, fields){ if (err) return next(err); }),
    connection.query('UPDATE Wallet SET nb = ? WHERE id = 1 AND id_User = ?', [req.body.goldWallet, req.body.idUser], function (err, rows, fields){
        if (err) return next(err);
        res.end();
    })
})

// ****************************** BASED ******************************
//AFFICHAGE
app.get('/based/:id', function (req, res, next) {
    let theId = req.params.id;
    // let theId = 1;
    connection.query('SELECT Based.id, Based.id_Building, Based.nb, Building.name, Building.description, Building.score, Building.level, Building.farmingSpeed, Building.path, Building.id_TypeBuilding AS TypeBuilding, Building.id_Resource AS TypeResource, TypeBuilding.label '+
    'FROM Based '+
    'INNER JOIN Building ON Building.id = Based.id_Building '+
    'INNER JOIN TypeBuilding ON TypeBuilding.id = Building.id_TypeBuilding '+
    'WHERE Based.id = ?',theId, function (err, rows, fields){
        if (err) return next(err)
        res.send(rows)
    })
})

// ****************************** ARMEE ******************************
//AFFICHAGE
app.get('/armee/:id', function (req, res, next) {
    let theId = req.params.id;
    // let theId = 1;
    connection.query('SELECT Armee.id_User, Armee.id, Armee.nb, Troop.name, Troop.description, Troop.score, Troop.path, Troop.id_Building AS idBuilding, Troop.id_TypeTroop AS TypeTroop, TypeTroop.label '+
    'FROM Armee '+
    'INNER JOIN Troop ON Troop.id = Armee.id '+
    'INNER JOIN TypeTroop ON TypeTroop.id = Troop.id_TypeTroop '+
    'WHERE Armee.id_User = ?',theId, function (err, rows, fields){
        if (err) return next(err)
        res.send(rows)
    })
})

// ****************************** BUILDINGS ******************************
// BUILDINGS
app.get('/buildings', (req, res) => {
    connection.query('SELECT Building.id, Building.name, Building.description, Building.score, Building.level, Building.farmingSpeed, Building.path, Building.id_TypeBuilding, Building.id_Resource '+
                    'FROM Building', function (err, rows, fields) {
        if (err) return next(err)
        console.log('The solution is: ', rows)
        res.send(rows)
    })
})
// BUILDINGS AJOUT
app.post('/buildings/buyBuildings', function (req, res, next) {
    let idBuilding = req.body.id;
    let idUser = 1;
    // Recupération ressource
    connection.query('SELECT id_User, nb, name '+
    'FROM Wallet '+
    'INNER JOIN Resource ON Resource.id = Wallet.id '+
    'WHERE id_User = ?', idUser, function (err, rows, fields){
        if (err) return next(err)
        let woodWallet = rows[2].nb;
        let stoneWallet = rows[1].nb;
        let goldWallet = rows[0].nb;
        
        // Coût ressource bâtiment
        connection.query('SELECT name, price '+
        'FROM CostBuilding '+
        'INNER JOIN Resource ON Resource.id = CostBuilding.id_Resource '+
        'WHERE CostBuilding.id = ? '+
        'ORDER BY Resource.id DESC', idBuilding, function (err, rows, fields){
            for(let row of rows){
                switch(row.name){
                    case "Wood" :
                        if(row.price > woodWallet) return res.end('Not enough resource');
                        woodWallet -= row.price;
                        break;
                    case "Stone" :
                        if(row.price > stoneWallet) return res.end('Not enough resource');
                        stoneWallet -= row.price;
                        break;
                    case "Gold" :
                        if(row.price > goldWallet) return res.end('Not enough resource');
                        goldWallet -= row.price;
                        break;
                }
            }

            // Sélection nb Bâtiment dans BDD
            connection.query('SELECT IFNULL(SUM(nb), -1) AS nb FROM Based WHERE id = ? AND id_Building = ?', [idUser, idBuilding], function (err, rows, fields){
                if (err) return next(err)
                // Retire le coût des ressources au User
                connection.query('UPDATE Wallet SET nb = ? WHERE id = 3 AND id_User = ?', [woodWallet, idUser])
                connection.query('UPDATE Wallet SET nb = ? WHERE id = 2 AND id_User = ?', [stoneWallet, idUser])
                connection.query('UPDATE Wallet SET nb = ? WHERE id = 1 AND id_User = ?', [goldWallet, idUser])

                if(rows[0].nb == -1){
                    // Ajout du bâtiment s'il ne l'étais pas déjà
                    connection.query("INSERT INTO Based VALUES (?, ?, 1)", [idUser, idBuilding], function (err, rows, fields){
                        if (err) return next(err)
                        res.send(req.body.name)
                    })
                } else {
                    // Update du nb de bâtiments 
                    let nb = (rows[0].nb+1);
                    connection.query("UPDATE Based SET nb = ? WHERE id = ? AND id_Building = ?", [nb, idUser, idBuilding], function (err, rows, fields){
                        if (err) return next(err)
                        res.send(req.body.name)
                    })
                }
            })
        })
    })
})
// CITYHALL
app.get('/buildings/cityHall', (req, res) => {
    connection.query('SELECT Building.id, Building.name, Building.description, Building.score, Building.level, Building.farmingSpeed, Building.path, Building.id_TypeBuilding, Building.id_Resource '+
                    'FROM Building '+
                    'INNER JOIN TypeBuilding ON TypeBuilding.id = Building.id_TypeBuilding '+
                    'WHERE TypeBuilding.label = "City Hall"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows);
    })
})
// BARRACKS
app.get('/buildings/barracks', (req, res) => {
    connection.query('SELECT Building.id, Building.name, Building.description, Building.score, Building.level, Building.farmingSpeed, Building.path, Building.id_TypeBuilding, Building.id_Resource '+
                    'FROM Building '+
                    'INNER JOIN TypeBuilding ON TypeBuilding.id = Building.id_TypeBuilding '+
                    'WHERE TypeBuilding.label = "Barrack"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows)
    })
})
// FARMER
app.get('/buildings/farmer', (req, res) => {
    connection.query('SELECT Building.id, Building.name, Building.description, Building.score, Building.level, Building.farmingSpeed, Building.path, Building.id_TypeBuilding, Building.id_Resource '+
                    'FROM Building '+
                    'INNER JOIN TypeBuilding ON TypeBuilding.id = Building.id_TypeBuilding '+
                    'WHERE TypeBuilding.label = "Farmer"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows)
    })
})
// DEFENSE
app.get('/buildings/defense', (req, res) => {
    connection.query('SELECT Building.id, Building.name, Building.description, Building.score, Building.level, Building.farmingSpeed, Building.path, Building.id_TypeBuilding, Building.id_Resource '+
                    'FROM Building '+
                    'INNER JOIN TypeBuilding ON TypeBuilding.id = Building.id_TypeBuilding '+
                    'WHERE TypeBuilding.label = "Defense"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows)
    })
})
// ****************************** TROOPS ******************************
// TROOPS
app.get('/troops', (req, res) => {
    connection.query('SELECT Troop.id, Troop.name, Troop.description, Troop.score, Troop.path, Troop.id_Building, Troop.id_TypeTroop '+
                    'FROM Troop', function (err, rows, fields) {
        if (err) return next(err)
        console.log('The solution is: ', rows)
        res.send(rows)
    })
})
// TROOPS AJOUT
app.post('/troops/buyTroops', function (req, res, next) {
    let idTroop = req.body.id;
    let idUser = 1;
    // Recupération ressource
    connection.query('SELECT id_User, nb, name '+
    'FROM Wallet '+
    'INNER JOIN Resource ON Resource.id = Wallet.id '+
    'WHERE id_User = ?', idUser, function (err, rows, fields){
        if (err) return next(err)
        let woodWallet = rows[2].nb;
        let stoneWallet = rows[1].nb;
        let goldWallet = rows[0].nb;
        
        // Coût ressource bâtiment
        connection.query('SELECT name, price '+
        'FROM CostTroop '+
        'INNER JOIN Resource ON Resource.id = CostTroop.id_Resource '+
        'WHERE CostTroop.id = ? '+
        'ORDER BY Resource.id DESC', idTroop, function (err, rows, fields){
            for(let row of rows){
                switch(row.name){
                    case "Wood" :
                        if(row.price > woodWallet) return res.end('Not enough resource');
                        woodWallet -= row.price;
                        break;
                    case "Stone" :
                        if(row.price > stoneWallet) return res.end('Not enough resource');
                        stoneWallet -= row.price;
                        break;
                    case "Gold" :
                        if(row.price > goldWallet) return res.end('Not enough resource');
                        goldWallet -= row.price;
                        break;
                }
            }

            // 
            connection.query('SELECT IFNULL(SUM(nb), -1) AS nb FROM Armee WHERE id_User = ? AND id = ?', [idUser, idTroop], function (err, rows, fields){
                if (err) return next(err)
                // Retire le coût des ressources au User
                connection.query('UPDATE Wallet SET nb = ? WHERE id = 3 AND id_User = ?', [woodWallet, idUser])
                connection.query('UPDATE Wallet SET nb = ? WHERE id = 2 AND id_User = ?', [stoneWallet, idUser])
                connection.query('UPDATE Wallet SET nb = ? WHERE id = 1 AND id_User = ?', [goldWallet, idUser])

                if(rows[0].nb == -1){
                    // Ajout du bâtiment s'il ne l'étais pas déjà
                    connection.query("INSERT INTO Armee VALUES (?, ?, 1)", [idTroop, idUser], function (err, rows, fields){
                        if (err) return next(err)
                        res.send(req.body.name)
                    })
                } else {
                    // Update du nb de bâtiments
                    let nb = (rows[0].nb+1);
                    connection.query("UPDATE Armee SET nb = ? WHERE id_User = ? AND id = ?", [nb, idUser, idTroop], function (err, rows, fields){
                        if (err) return next(err)
                        res.send(req.body.name)
                    })
                }
            })
        })
    })
})
// MELEE
app.get('/troops/melee', (req, res) => {    
    connection.query('SELECT Troop.id, Troop.name, Troop.description, Troop.score, Troop.path, Troop.id_Building, Troop.id_TypeTroop '+
                    'FROM Troop '+
                    'INNER JOIN TypeTroop ON TypeTroop.id = Troop.id_TypeTroop '+
                    'WHERE TypeTroop.label = "Melee"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows)
    })
})
// RANGE
app.get('/troops/range', (req, res) => {
    connection.query('SELECT Troop.id, Troop.name, Troop.description, Troop.score, Troop.path, Troop.id_Building, Troop.id_TypeTroop '+
                    'FROM Troop '+
                    'INNER JOIN TypeTroop ON TypeTroop.id = Troop.id_TypeTroop '+
                    'WHERE TypeTroop.label = "Range"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows)
    })
})
// FLY
app.get('/troops/fly', (req, res) => {
    connection.query('SELECT Troop.id, Troop.name, Troop.description, Troop.score, Troop.path, Troop.id_Building, Troop.id_TypeTroop '+
                    'FROM Troop '+
                    'INNER JOIN TypeTroop ON TypeTroop.id = Troop.id_TypeTroop '+
                    'WHERE TypeTroop.label = "Fly"', function (err, rows, fields) {

        if (err) return next(err)
        res.send(rows)
    })
})
// ****************************** X ******************************

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
    res.send('server error')
})


app.listen(PORT, () => {
    console.log('Le serveur ecoute sur le port ', PORT)
})

//connection.end()