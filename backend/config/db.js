import mongose from 'mongoose'
import colors from 'colors'

const MONGO_URI="mongodb+srv://divya:1234@cluster0.f6wltxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
    try{
        const conn = await mongose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
            process.exit(1)
    }
}

export default connectDB