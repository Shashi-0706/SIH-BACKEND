import express from "express";
import cors from "cors";
import { connectDB } from "./data/database.js";
import UserRouter from "./routes/Users/user.js";
import JudgeRouter from "./routes/Judge/judge.js"
import LawyerRouter from "./routes/Lawyer/lawyer.js"
import SuperAdminRouter from "./routes/superAdmin/superAdmin.js"

const app = express();
const port = process.env.PORT || 5000;
//Mongodb connection
connectDB();

//setting view engines
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//Routes
app.use("/api/user", UserRouter);
app.use("/api/judge", JudgeRouter);
app.use("/api/lawyer", LawyerRouter);
app.use("/api/superadmin", SuperAdminRouter);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
