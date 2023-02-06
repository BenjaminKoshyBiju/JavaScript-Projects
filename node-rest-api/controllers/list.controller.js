const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BenjaminKoshy1409',
    database: 'lists'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('Successfully connected with mysql database...')
})

exports.create = (req, res) => {
    if (!req.body.description) {
        return res.status(400).send({
            message: "List description can't be empty"
        });
    }

    var params = req.body;
    console.log(params);

    connection.query("INSERT INTO list SET ? ", params,
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: results,
                message: 'New Client had been added succesfully'
            });
        });
};


exports.findAll = (req, res) => {
    connection.query('select * from list',
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
};


exports.findOne = (req, res) => {

    connection.query('select * from list where Id=?',
        [req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
};


exports.update = (req, res) => {
    // Validate Request
    if (!req.body.description) {
        return res.status(400).send({
            message: "List description can't be empty"
        });
    }

    console.log(req.params.id);
    console.log(req.body.description);
    connection.query('UPDATE `list` SET `name`=?,`description`=? where `id`=?',
        [req.body.name, req.body.description, req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        });
};


exports.delete = (req, res) => {
    console.log(req.body);
    
    connection.query('DELETE FROM `list` WHERE `id`=?', 
        [req.params.id], function (error, results,fields) {
            if (error) throw error;
            res.end('Record has been deleted!');
    });
};  