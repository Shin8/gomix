var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT;
var bodyparser = require('body-parser');
var moment = require('moment');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/my-cool-page.html'));
app.post('/get', (req, res) => {
  var date = req.body.date;
  console.log(date);
  if(date.match(/^[0-9]+$/)){
    // res.json({unix: date, natural: new Date(+date).toISOString().slice(0,10)});
    res.json({unix: date, natural: moment(+date).format('DD MMMM, YYYY')});
  }
  else if(typeof date === 'string'){
    var millis = Date.parse(date);
    if(millis){
      res.json({unix: millis, natural: date});
    }else{
      res.json({date: date, error: 'unrecognized format'});
    }
  }else {
    res.json({date: date,  error: 'date sent is not a string or a number'});
  }
});

app.listen(port, console.log(`Server is running at port: ${port}`));