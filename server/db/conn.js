const mongoose = require('mongoose')

let isConn = false;

const DB= process.env.DATABASE;

const initialConn = async()=>{
    mongoose.set('strictQuery',true);

     if(isConn) {
    console.log('MongoDB is already connected');
    return;
  }
    try {
        const a= await mongoose.connect(DB)
        if(a) isConn = true;
        console.log(`"connection success"`)
        
    } catch (error) {
        console.log(`Not connected due to ${error}`);
    }
}

// mongoose.connect(DB).then(console.log('connection success'))
// .catch((err)=>{console.log(`no connection ${err}`)})

module.exports = initialConn;