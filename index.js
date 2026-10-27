const mongoose = require('mongoose'); 
const MONGO_URI = 'mongodb+srv://u3016709_db_user:<db_password>@saniwebapp.t9ibcM9i9uOg8mfE.mongodb.net/';
 const PersonSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true 
    }, 
    age: Number, 
    gender: String, 
    salary: Number,
    city: String
}); 
 
const Person = mongoose.model( 
    'modelname', 
    PersonSchema, 
    'personCollection' 
); 
 
// Function to insert one document 
async function insertOne() { 
 
    const doc1 = new Person({ 
        name: 'NHQ', 
        age: 32, 
        gender: 'Male', 
        salary: 1234,
        city: 'London'
    }); 
 
    const savedDoc = await doc1.save(); 
 
    console.log('One document inserted'); 
    console.log(savedDoc); 
} 
 // Function to insert many documents
 async function insertmany()
 {
    const manypersons =
    [
        { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456, city: 'London' }, 
        { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000, city: 'Manchester' }, 
        { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402, city: 'Birmingham' }, 
        { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519, city: 'Leeds' }    
    ]
    const result = await Person.insertMany(manypersons);
    console.log("many documents inserted");
    console.log(result);
 }  
 // Find all documents
 async function findAll()
 {
    const docs = await person.find({})
    .sort({salary: 1}) // sort by salary ascending 
    .select('name salary age')
    .limit(100);
    console.log("showing multiple documents");
    docs.forEach(doc =>{
        console.log(doc.age, doc.name, doc.salary);
    
    })
 }
 // Find females with age >= 30
 async function findFemalesOver30()
 {
    const givenAge = 30;
    const docs = await Person.find({ gender: 'Female', age: { $gte: givenAge } }).sort({ salary: 1 }).select('name salary age').limit(10);
    console.log(`Females aged ${givenAge} or above:`);
    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });
 }
 // Count all documents 
 async function countDocuments()
 {
    const count = await person.countDocuments();
    console.log("Total Documents count:", count);
 }
 // Delete all documents where age >= 25 
 async function deleteManyPersons()
 {
    
    const result = await person.deleteMany({
        age: {$gte: 25}
    });
    console.log("Deleted documents :", result);
 }
 // Update all females' salary to 5555 
async function updateManyPersons() { 
    const result = await person.updateManyPersons({
        gender: 'Female'
    }, {
        salary: 5555
    });
    console.log("Update successful");
    console.log(result);
}
async function main() { 
 
    try { 
 
        if (!MONGO_URI) {
            throw new Error('Set the MONGO_URI environment variable before running this script.');
        }

        await mongoose.connect(MONGO_URI); 
        console.log('Connected to MongoDB Atlas.');
 
        const results = await Person.find({ city: 'London' })
            .select('name age gender city');

        console.log('People living in London:');
        results.forEach(person => console.log(person));
        } catch (err) { 
 
        console.error('Error:', err); 
 
    } finally { 
 
        await mongoose.connection.close(); 
        console.log('Connection closed'); 
 
    } 
} 
 
main();