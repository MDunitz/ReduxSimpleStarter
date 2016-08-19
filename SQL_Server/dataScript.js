const axios = require ('axios');
const postInfo = require('./dbController');
const testData = require('./biobotsData/bioprintData');
const ROOT_URL_DB
function load(){
  var myData = JSON.parse(testData);
  for(var i=0; i<myData.data.length; i++){
    var currSet = myData.data[i];
    axios.post(`${ROOT_URL_DB}/api/dbInfo`, {
        user_info: {
            email: currSet.user_info.email,
            serial: currSet.user_info.serial
        },
        print_info: {
            clDuration: currSet.print_info.crosslinking.cl_duration,
            clEnabled: currSet.print_info.crosslinking.cl_enabled,
            clIntensity: currSet.print_info.crosslinking.cl_intensity,
            input: currSet.print_info.files.input,
            output: currSet.print_info.files.output,
            extruder1: currSet.print_info.pressure.extruder1,
            extruder2: currSet.print_info.pressure.extruder2,
            layerHeight: currSet.print_info.resolution.layerHeight,
            layerNum: currSet.print_info.resolution.layerNum,
            wellplate: currSet.print_info.wellplate
        },
        print_data: {
            deadPercent: currSet.print_data.deadPercent,
            elasticity: currSet.print_data.elasticity,
            livePercent: currSet.print_info.livePercent
        }
    })
    .then(function(response){
        console.log('whoo added print info: ', i, ' to sql db')
    });
  }
}

