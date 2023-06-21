import db from './mongoConnect.js'

const furnatureDB = db.collection('furnature')

export const addFurniture = async(req, res) => {
 // add furnature to our mongo db

 // const newFurnature = { types: 'sofa', collection: 'Edgewater', special: false, price: 4899, in_stock: false }

const newFurnatureAdded = await furnatureDB.insertOne(req.body)
console.log(newFurnatureAdded)

res.status(201).send(newFurnatureAdded)
}

export const getAllFurnature = async (req, res) => {
// here send all furnature back to client

try{
const getAllFurnature = await furnatureDB.find().toArray()

res.status(200).send(allFurnature)
} catch (error) {
res.status(404).send(error)
}
}