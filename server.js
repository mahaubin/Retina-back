const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});