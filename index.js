const express = require('express');
const app = express();
const PORT = 3000;
const router = express.Router(); 
const userRoutes = require ('./controllers/api/user-routes.js')


app.use(userRoutes);

app.listen(PORT, () => {
    console.log("Server running on port 3000", PORT)
});
