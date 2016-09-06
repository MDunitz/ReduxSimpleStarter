var morgan = require('morgan');
var bodyParser = require('body-parser');

var dbRoutes = require('./dbRoutes');
module.exports = function(app, express){
  var dbRouter = express.Router();
  app.use(morgan('dev'));
  app.use(bodyParser.json({type: '*/*'}));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  require('./dbRoutes.js')(app);
}