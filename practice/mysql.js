
  


 var {createPool} = require('mysql');


const pool = createPool({

    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "moneytracker",
    connectionLimit:10
 })

 
 pool.query('SELECT id, spent, price FROM expenses', (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    console.log(result);
    // access the id, spent, and price fields of each row in the result
    result.forEach(row => {
      const id = row.id;
      const spent = row.spent;
      const price = row.price;
      console.log(`id: ${id}, spent: ${spent}, price: ${price}`);
   
     

      
    });
  });

 