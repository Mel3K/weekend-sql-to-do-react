const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    res.send(task);
    // When the clients asks for the task
    // We need to reach out to the database for the songs
    // and then send them to the client.

    // Write a query to get the task
    // Often we write these in Postico, and we test them there
    // Then we copy them here, and turn them into strings.
    let queryText = `SELECT * FROM "task";`;

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
        });

});

router.post('/', (req, res) => {
    console.log('req.body', req.body);
  
    res.sendStatus(200);
    // When the client sends us a new song
    // We want our server to send it to the database


    // I want to write a query to insert the new song into the database

    // Even though I want to add a specific new task
    // I go to postico, and figure out how to add a todo in general
    // Once it works postico, I copy it to my string

    const toDo = req.body.toDo;
    const completed = req.body.completed;
    const queryText = `INSERT INTO "tasks" 
    ("toDo", "complete" ) 
VALUES
    ($1, $2);`;

    

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
        pool.query(queryText, [toDo,completed])
        .then(result => {
            console.log('db insert response successful:', result);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('db insert response failed', error);
            res.sendStatus(500);
        });
    });


// POST

// PUT

// DELETE
router.delete('/:id',(req,res) => {
    const idToDelete = req.params.id;
 
     console.log(`Delete request for id`, idToDelete);
 
         const queryText =`DELETE FROM "task" WHERE "id" = $1;`;
         pool.query(queryText, [idToDelete])
         .then(result => {
             console.log(`task with id: ${idToDelete} successful and deleted`);
             res.sendStatus(200);
             
         })
         .catch((error) => {
             console.log(`failed to delete task with id: ${idToDelete}, Error: ${error}`, error);
                 res.sendStatus(500); //you should always respond
 
         })
   })
module.exports = router;
