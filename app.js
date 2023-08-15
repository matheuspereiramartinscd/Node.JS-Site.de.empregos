const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var http = require('http').Server(app);
const mongoose = require('mongoose');
const DBurl = 'mongodb+srv://mpmcode:mpm392161@cluster0.tmve4ix.mongodb.net/?retryWrites=true&w=majority'
const { MongoClient } = require('mongodb');
var payments

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(DBurl);

    jobsminasgerais = await client.db("jobsearch").collection("jobsminasgerais").find({}).toArray();
    jobsparaiba = await client.db("jobsearch").collection("jobsparaiba").find({}).toArray();
    jobssaopaulo = await client.db("jobsearch").collection("jobssaopaulo").find({}).toArray();
    jobsriodejaneiro = await client.db("jobsearch").collection("jobsriodejaneiro").find({}).toArray();
  
   
   


    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

       
       

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
        return payments;
    }
   
    


}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
 
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

   
};







app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))


async function paymentss (){
  await main();
  console.log(jobsminasgerais[1].nome);
  console.log(jobsparaiba[1].nome);
  console.log(jobssaopaulo[1].nome);
  console.log(jobsriodejaneiro[1].nome);


  app.get('/jobsminasgerais', (req,res)=>{

    res.render('jobsminasgerais', {jobsminasgeraisejs: jobsminasgerais});
})

app.get('/jobssaopaulo', (req,res)=>{

  res.render('jobssaopaulo', {jobssaopauloejs: jobssaopaulo});
})
app.get('/jobsparaiba', (req,res)=>{

  res.render('jobsparaiba', {jobsparaibaejs: jobsparaiba});
})
app.get('/jobsriodejaneiro', (req,res)=>{

  res.render('jobsriodejaneiro', {jobsriodejaneiroejs: jobsriodejaneiro});
})

app.get('/sobre', (req,res)=>{
  res.render('sobre');
})
   
app.get('/contato', (req,res)=>{
  res.render('contato');
})


    app.get("/", function (req, res) {
      res.render("home", {
    
      })
    
    })
  

  
    
  
  
    app.get("/jobview", function (req, res) {
      res.render("jobview", {
    
      })
    
    })


}

paymentss();




  mongoose.connect(DBurl , (err) => { 
    console.log('mongodb connected',err);
 })

 app.listen(3000, (req, res) => {
  console.log("Servidor rodando na porta 3000")
})

