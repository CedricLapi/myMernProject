const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000
app.use(cors())

require('./routes/person.routes')(app);



app.listen(port, () => console.log(`The server is up and running on port: ${port}`));