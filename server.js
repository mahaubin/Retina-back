require('dotenv').config({ path: './config/.env' });
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

app.listen(5000, () => {
  console.log(`server started on port 5000 et cela marche bien`);
});
