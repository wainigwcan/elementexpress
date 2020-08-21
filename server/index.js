const express = require("express");
const app = express();

// 跨域
app.use(require("cors")());
// 接收前端数据
app.use(express.json());

// 数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/elehuang", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("数据库谅解成功");
    });

//创建表
const Article = mongoose.model("Article", new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}));


app.get("/", async (req, res) => {
    res.send("ok");
});

// 增加文章
app.post("/api/article", async (req, res) => {
    const article = await Article.create(req.body);
    res.send(article);
})
// 所有文章
app.get("/api/article", async (req, res) => {
    const article = await Article.find();
    res.send(article);
})
// 删除一条
app.delete("/api/article/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.send({ resulit: true });
});
// 获取单页详情
app.get("/api/article/:id", async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.send(article);
});
// 保存修改
app.put("/api/article/:id", async (req, res) => {
    await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send({
        resulit: "ok"
    });
});
app.listen(3000, () => {
    console.log("服务器开启成功")
});