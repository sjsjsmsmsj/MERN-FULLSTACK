let express = require('express')
let app = express();
let mongoose = require('mongoose');
let dotenv = require('dotenv');
dotenv.config();
const enquiryRouter = require('../server/App/routes/web/enquiryRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors())

// Routes
app.use('/api/website/enquiry', enquiryRouter)


mongoose.connect(process.env.DB_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running 8020");
    })
}).catch((err) => {
    console.log(err);
})