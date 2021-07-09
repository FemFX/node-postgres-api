const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
