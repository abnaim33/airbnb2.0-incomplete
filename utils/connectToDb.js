import mongoose, { MongoClient } from 'mongoose'

const connectToDB = () => {



    mongoose.connect(process.env.DATABASE_URL, {}).then(
        () => console.log('connected to database'),
        err => { console.log(err) }
    );


}


export default connectToDB