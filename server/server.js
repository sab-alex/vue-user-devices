const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    
    const app = express();

    app.set('models', require('./models'));

    

    app.use(bodyParser.json());
    app.use(cors());
    const port= process.env.PORT || 4000;

    app.use('/users', require('./routes/UserRoute'));
    app.use('/devices', require('./routes/DeviceRoute'));

    app.listen(port, function(){
     console.log('Listening on port ' + port);
    });