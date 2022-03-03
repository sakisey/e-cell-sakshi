'use strict';

const fs = require('fs');
const { off } = require('process');

fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let userList = JSON.parse(data);

    console.log(userList);


    console.log("\n\nSearching Leo Gillespie...\n")
    userList.forEach((value, index)=>{
        if(value._id === '5c8a1f292f8fb814b56fa184'){
            console.log('Data',value);
        }
    })
});

console.log('This is after the read call');
