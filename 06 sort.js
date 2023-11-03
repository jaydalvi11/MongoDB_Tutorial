db.Inventory.find().sort({qty: -1}) // sorts the documents in descending order of the quantities.

db.Inventory.find().sort({qty: 1}) // sorts the documents in ascending order of the quantities.

db.Inventory.find().skip(1) // skips first document 

db.Inventory.find().skip(2) // skips first 2 documents

db.Inventory.find().limit(2) // limits the number of documents in the output to 2.



no = 8

db.blogs.find().skip( (pageNo-1) * no).limit(no) 

pageNo = 1 ->  db.blogs.find().skip(0).limit(8) 
pageNo = 2 ->  db.blogs.find().skip(8).limit(8) 