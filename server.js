require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// your code
app.use('/api', (req, res) => {
  res.send("L'application demare bien");
});

app.listen(8000, () => {
  console.log(`server started on port 8000 et cela marche bien`);
});
