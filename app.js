import express from "express";
import { connectToDB } from "./database/db.js";
import { router } from "./routes/book.routes.js";
const app = express();

//connect to database
connectToDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express router
app.use("/api/books", router);

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
});
