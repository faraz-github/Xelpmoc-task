const app = require("express")();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World From Server");
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})