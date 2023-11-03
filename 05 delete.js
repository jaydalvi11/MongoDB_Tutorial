db.Inventory.deleteMany({})   // deletes all the documents

db.Inventory.deleteMany({status: "A"})  // deletes all documents where status is "A"

db.Inventory.deleteOne({status : "D"})  //  deletes first document where status is "D"