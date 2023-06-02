const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/data', (req, res) => {
    // Extract data from the request
    const name = req.body.name;
    const reactionTimes = req.body.reactionTimes;

    // Here, you would usually store the data in a database.
    // For now, we'll just log it to the console.
    console.log(`Received data from ${name}`);
    console.log(reactionTimes);

    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
