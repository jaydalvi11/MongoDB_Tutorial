db.Inventory.find()   // fetch all documents

db.Inventory.find({qty:90})  // fetch all documents where qty=90

db.Inventory.find({tags: {$in: ["aluminium", "sulphur"]}})  //fetch all documents where tags are in aluminium and sulphur

db.Inventory.find({item: "planner", qty: {$lt: 80}})  // fetch all documents where item is planner AND qty is less than 80

db.Inventory.find({$or: [{item:"paper"},{qty: {$lt:50} }]}) // fetch all documents where item is paper or qty is less than 50

db.Inventory.findOne({qty:100})  //  will return the first document it encounters in the collection, 
                                 // which might not necessarily be the first document that was inserted


