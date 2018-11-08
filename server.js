const express = require('express');
// const path = require('path');

const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('http://su-casa-overview.us-west-1.elasticbeanstalk.com/', 'public'));

// app.get('/:propertyID', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/public/index.html`));
// });

app.get('/:propertyID', (req, res) => {
  res.sendFile('http://su-casa-overview.us-west-1.elasticbeanstalk.com/index.html');
});


// app.listen(port, () => {
//   console.log(`server running at http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`server running at http://su-casa-overview.us-west-1.elasticbeanstalk.com/`);
});

// http://su-casa-overview.us-west-1.elasticbeanstalk.com/
