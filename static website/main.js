const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(5000,()=>{
console.log(`server @ http://localhost:5000`);
});
