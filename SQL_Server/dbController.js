const connectionString = 'postgres://@localhost:5432/biobots';
const pg = require('pg');
//TODO check options for pgp
const pgp = require('pg-promise')(/*/options*/);
const db = pgp(connectionString)
module.exports = {
  dataPost: function(req, res){
    //grab data from request
    var data = {
      email: req.body.user_info.email,
      serial: req.body.user_info.serial,
      clDuration: req.body.print_info.clDuration,
      clEnabled: req.body.print_info.clEnabled,
      clIntensity: req.body.print_info.clIntensity,
      input: req.body.print_info.input,
      output: req.body.print_info.output,
      extruder1: req.body.print_info.extruder1,
      extruder2: req.body.print_info.extruder2,
      layerHeight: req.body.print_info.layerHeight,
      layerNum: req.body.print_info.layerNum,
      wellplateType: req.body.print_info.wellplate,
      deadPercent: req.body.print_data.deadPercent,
      elasticity: req.body.print_data.elasticity,
      livePercent: req.body.print_data.livePercent
    }
    db.tx(function(t){
      return t.oneOrNone('SELECT id FROM users WHERE email=${email}', data)
      .then(function(userID){
        //console.log('made it to here', data, userID);
        return userID || t.one('INSERT INTO users(email, serialnumber) values(${email}, ${serial}) RETURNING id', data)
      })
    .then(function(userID){
      data.userid = userID.id;
      //console.log('made it to here', userID);
      return t.one('INSERT INTO printInfo(inputFile, outputFile, extruder1, extruder2, clEnabled, clDuration, clIntensity, layerNum, layerHeight, wellplateType, userID) values (${input}, ${output}, ${extruder1}, ${extruder2}, ${clEnabled}, ${clDuration}, ${clIntensity}, ${layerNum}, ${layerHeight}, ${wellplateType},  ${userid}) RETURNING id', data)
    })
    .then(function(printID){
      //console.log('livepercent', data.livePercent);
      data.printid = printID.id;
      return t.one('INSERT INTO printData(deadPercent, elasticity, livePercent, printID) values(${deadPercent}, ${elasticity}, ${livePercent}, ${printid}) RETURNING id', data)
    })
    .then(function(printDataID){
      res.sendStatus(200)
    })
    .catch(function(err){
      console.log('err posting to the db', err);
      res.send(err)
    })
  })
  },
  
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

    }
  })

},

  errRes: function(err){
    done();
    console.log('err connecting to db', err);
    return res.status(500).json({success: false, data: err});
  }
}




