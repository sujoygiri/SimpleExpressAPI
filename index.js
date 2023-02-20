const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/',(req,res,next) => {
    res.json({msg:'server is running'})
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});