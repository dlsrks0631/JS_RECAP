import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); // express-function -> express application을 생성

const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

const handleLogin = (req, res) => {
  return res.send({ message: "Login here" });
};

app.listen(4000, handleListening);
app.get("/login", handleLogin);
