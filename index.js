const mongoose = require("mongoose");

const express = require("express");

const app = express();

const port = 4000;

app.use(express.json());

app.use(require("./routes/studentRout.js"));


mongoose.connect( "mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/?retryWrites=true&w=majority", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true, 
})

  .then(() => console.log("Успешное соеденение с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соеденении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`Сервер запушен успешноapp  http://localhost:${port} ` );
});
