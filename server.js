const express = require('express');
const app = express();
const PORT = 3000;
const router = express.Router(); 

app.use(router);

app.listen(PORT, () => {
    console.log("Server running on port 3000", PORT)
});
