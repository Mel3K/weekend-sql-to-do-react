const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const { Query } = require('pg');

// GET

router.get('/', (req, res) => {
   console.log('in get request');

    // When the clients asks for the to do item
    // We need to reach out to the database for that todo 
    // and then send them to the client.

    // Write a query to get the task
    // Often we write these in Postico, and we test them there
    // Then we copy them here, and turn them into strings.
   const queryText = `SELECT * FROM "tasks";`;

   
    // Send that query to the DB (database)
    pool.query(queryText)
        .then((result) => {
            
            // The response is a big old ugly object
            // with lots of extra info
            // the info we care about is in result.rows
            // console.log(result.rows);
            // Always respond to the client
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making query: ${queryText}`, error);
            // Never leave the client waiting
            res.sendStatus(500);
        })

});

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const queryText = `INSERT INTO "tasks" 
    ("todo", "completed" ) 
VALUES ($1, FALSE);`;
pool.query(queryText, [req.body.rubberDucky])
.then((result) => {
    res.sendStatus(200);
}).catch((err) => {
    console.log(err);
    res.sendStatus(500);
})
});    // When the client sends us a new song
    // We want our server to send it to the database
  


    // I want to write a query to insert the new song into the database

    // Even though I want to add a specific new task
    // I go to postico, and figure out how to add a todo in general
    // Once it works postico, I copy it to my string

 

    

    // NEVER, NEVER, NEVER DO THIS
    // Never send data from the client
    // Directly to the database
    // const queryText = `
    //                 INSERT INTO "songs" 
	//                     ("rank", "artist", "track", "published") 
    //                 VALUES
	//                     ('${rank}', '${artist}', '${track}', '${published}');
    //                 `;

    // pool.query(queryText)

    //Instead we "sanitize our inputs"

    // For the query, you do almost the same thing
    // We don't put javascript variables into it
    // We put SQL variables into it
    // When we use input sanitization, we can take the quotes off of our SQL variables                  `;

        // We have PG fill in the SQl variables for us



// POST

// PUT
router.put('/toggle/:id', (req, res) => {
    let { id } = req.params;
    // This query will switch from true to false and false to true
    const sqlText = `
        UPDATE "tasks" SET "completed" = NOT "completed" 
        WHERE "id" = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});
// DELETE
router.delete('/:id', (req,res) => {
   let { id } = req.params;

 
     console.log(`Delete request for id`);
 
         const queryText =`DELETE FROM "tasks" WHERE "id" = $1;`;
         pool.query(queryText, [id])
         .then(result => {
             console.log(`task with id: ${[id]} successful and deleted`);
             res.sendStatus(200);
             
         })
         .catch((error) => {
             console.log(`failed to delete task with id: ${queryText}, Error: ${error}`, error);
                 res.sendStatus(500); //you should always respond
         })
   });
module.exports = router;
