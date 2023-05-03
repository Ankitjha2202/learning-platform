import app from "./app.js";

const port = 4000;
app.listen(port,()=>{
  // console.log(`${process.env.PORT}`)
  console.log(`server is running on port: ${port}`)
})