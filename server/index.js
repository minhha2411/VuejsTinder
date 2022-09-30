const express = require("express");
const app = express();
const port = 3000;
const uri =
  "mongodb+srv://minhha2411:anhcuong8262211@cluster0.x7pef.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");

let Girl, MyAccount;
const main = async () => {
  try {
    await mongoose.connect(uri);
    const girlsSchema = new mongoose.Schema({
      name: String,
      age: Number,
      active: Boolean,
      image: Array,
      position: String,
      description: String,
    });
    const myAccountSchema = new mongoose.Schema({
      name: String,
      age: Number,
      image: Array,
      description: String,
      hobbies: String,
      zodiacSign: String,
      personality: String,
      eatingHabit: String,
      likeGirl: Array,
      superLikeGirl: Array,
    });
    Girl = mongoose.model("Girl", girlsSchema);
    MyAccount = mongoose.model("MyAccount", myAccountSchema);
  } catch (error) {
    console.log("Error connecting to server", error);
  }
};

main().catch((err) => console.log(err));

app.get("/", async (req, res) => {
  try {
    const girlResult = await Girl.find();
    console.log("girlResult", girlResult);
  } catch (error) {
    console.log("Error at get / ", error);
  }
  res.send("Hello World!");
});

app.get("/myAccount", async (req, res) => {
  try {
    const myAccount = await MyAccount.find();
    console.log("myAccount", myAccount);
  } catch (error) {
    console.log("Error at get /myAccount ", error);
  }
});

app.post("/likeGirl", async (req, res) => {
  try {
    const girlID = req.params.girlId || "";
    const accountID = req.params.AccountId || "";
    const girlFind = await Girl.find({ _id: girlID });
    console.log("girlFind", girlFind);
    if (girlFind) {
      const myAccount = await MyAccount.find();
      const currentLikeGirl = [...myAccount[0].likeGirl];
      currentLikeGirl.push(girlFind);
      MyAccount.where({ _id: accountID }).update({
        $set: { likeGirl: currentLikeGirl },
      });
    }
  } catch (error) {
    console.log("Error at get /likeGirl ", error);
  }
});

app.post("/superLikeGirl", async (req, res) => {
  try {
    const girlID = req.params.girlId || "";
    const accountID = req.params.AccountId || "";
    const girlFind = await Girl.find({ _id: girlID });
    console.log("girlFind", girlFind);
    if (girlFind) {
      const myAccount = await MyAccount.find();
      const currentSuperLikeGirl = [...myAccount[0].superLikeGirl];
      currentSuperLikeGirl.push(girlFind);
      MyAccount.where({ _id: accountID }).update({
        $set: { superLikeGirl: currentSuperLikeGirl },
      });
    }
  } catch (error) {
    console.log("Error at get /likeGirl ", error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
