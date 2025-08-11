const express=require('express');
const app=express();
const PORT=process.env.PORT || 8080;
const cors=require('cors');
// dotenv configuration
const dotenv=require('dotenv');
dotenv.config();

// cors handling
app.use(cors);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});