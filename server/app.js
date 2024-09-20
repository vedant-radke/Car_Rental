const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
// const path = require('path');


// Configurations
dotenv.config();

const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.url);

 
  console.log('connected');
}
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true,
//   }));


  const PORT = 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));