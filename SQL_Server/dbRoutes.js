//foreign key on user, print or other == 3 routes

var dbController = require('./dbController');

module.exports = function(router) {
  //add database info
  router.post('/api/dbInfo', dbController.dataPost);
  //sort by user
  // router.get('api/byUser/1', dbController.byUserGetOne);
  // router.get('api/byUser/all', dbController.byUserGetALL);
  // router.post('api/byUser', dbController.byUserPost);
  // router.put('api/byUser', dbController.byUserPut);
  // router.delete('api/byUser', dbController.byUserDelete);
  // //sort by print number
  // router.get('api/byPrint/1', dbController.byPrintGetOne);
  // router.get('api/byPrint/all', dbController.byPrintGetALL);
  // router.post('api/byPrint', dbController.byPrintPost);
  // router.put('api/byPrint', dbController.byPrintPut);
  // router.delete('api/byPrint', dbController.byPrintDelete);
  // //sort by result
  // router.get('api/byResult/1', dbController.byResultGetOne);
  // router.get('api/byResult/all', dbController.byResultGetALL);
  // router.post('api/byResult', dbController.byResultPost);
  // router.put('api/byResult', dbController.byResultPut);
  // router.delete('api/byResult', dbController.byUserDelete);
}
