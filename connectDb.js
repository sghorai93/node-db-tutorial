var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Th@n0s',
    database: 'my_db_node'
});

con.connect(function(err){
    if(err)
        throw err;
    console.log('Connected Successfully...')

    /**
     * Create Database
     */
    /*
    con.query("CREATE DATABASE my_db_node", function (err, result) {
        if (err)
            throw err;
        console.log('Database Created Successfully...');
    });
    */

    /**
     * Create Table
     */
    /*
    var createSql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(createSql, function(err, result) {
        if(err)
            throw err;
        console.log('Table Created...');
    });

    /**
     * Insert Table
     */
    /*
    var insertSql = "INSERT INTO customers (name, address) VALUES ('John Doe', 'US')";
    con.query(insertSql, function (err, result) {
       if (err) throw err;
       console.log("1 record inserted");
    });
    */

    /**
     * Insert Multiple Value
     */
    
    var insertSql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
    con.query(insertSql, [values], function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
    });
    


})