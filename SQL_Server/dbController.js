const connectionString = 'postgres://@localhost:5432/bioBots';
const pg = require('pg');
//TODO check options for pgp
const pgp = require('pg-promise')(/*/options*/);

module.exports = {
  byUserGetOne: function(req, res){
    var reqData ={
      userSerialNumber : req.body.userSerialNumber,
      resultsToCollect : req.body.resultsToCollect
    };
    var results = [];

    pg.connect(connectionString, function(err, client, done){
      if(err){
        errRes(err);
      }
      //TODO dont know how to do this for variable database names
      // SELECT ID FROM users WHERE serialNumber (matches what was passed in)
      //SELECT ID FROM printInfo WHERE userID (matches the the ID from above)
      //select * from database/s WHERE printID(matches the printIDs selected above )
      var query = client.query()

    })

},
  byUserGetALL: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })
    //select all prints join on results

},
  byUserPost: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  UserPut: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byUserDelete: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  //sort by print number
  byPrintGetOne: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byPrintGetALL: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byPrintPost: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byPrintPut: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byPrintDelete: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  //sort by res)ult
  byResultGetOne: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byResultGetALL: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byResultPost: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byResultPut: function(req, res){
  
  pg.connect(connectionString, function(err, client, done){
    if(err){
      errRes(err);
    }
  })

},
  byUserDelete: function(req, res){
    pg.connect(connectionString, function(err, client, done){

    if(err){
      errRes(err);

})    }

},

  errRes: function(err){
    done();
    console.log('err connecting to db', err);
    return res.status(500).json({success: false, data: err});
}