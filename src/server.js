const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const dirPath = path.join(__dirname, '../', 'dist');
app.use(express.static(dirPath));

app.use('*', (req, res) => {
  res.sendFile(path.resolve(dirPath, 'index.html'))
})



app.listen(PORT, () => {
  console.log(`Chat listening on port ${PORT}!`);
});
