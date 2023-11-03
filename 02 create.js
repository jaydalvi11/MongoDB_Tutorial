db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )


 db.Inventory.insertMany(
     [
        { item: "canvas1", qty: 50, tags: ["cotton"], size: { h: 23, w: 35.5, uom: "cm" } },
    { item: "canvas2", qty: 100, tags: ["aluminium"], size: { h: 34, w: 35.5, uom: "cm" } },
    { item: "canvas3", qty: 150, tags: ["zinc"], size: { h: 12, w: 33, uom: "cm" } },
    { item: "canvas4", qty: 200, tags: ["copper"], size: { h: 5, w: 38.5, uom: "cm" } }
        ]
 )


 db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
 ])