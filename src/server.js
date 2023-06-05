const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const dirPath = path.join(__dirname, '../', 'dist');
app.use(express.static(dirPath));

app.get('/.*/', (req, res) => res.sendFile('./index.html'));

app.listen(PORT, () => {
  console.log(`Chat listening on port ${PORT}!`);
});
