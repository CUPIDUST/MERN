import dotenv from "dotenv";
import connectToMongo from "./db/db.js";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});
// const app = express();

connectToMongo()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Example app listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Can't connect to mongoDB!!! ", error);
  });
// app.on("error", (error) => {
//   console.log("EXPRESS CONNECTION ERROR:", error);
// });
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.use(express.json());

// app.use('/api/auth', auth);
// app.use('/api/notes', note);
