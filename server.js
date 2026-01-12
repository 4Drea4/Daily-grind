const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

// In server.js, create a new GET route at the path /api/fun-fact.
// This route will be responsible for fetching the data and sending it to the client.

app.get("/api/fun-fact", async (req,res) => {
   try{
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

    const response = await axios.get(url);

}
)


app.listen(PORT, ()=>{
    console.log(`Server running on local host:${PORT}`);
});