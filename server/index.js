const express = require("express");
const app = express();
const port = 3000;
const uri =
  "mongodb+srv://minhha2411:anhcuong8262211@cluster0.x7pef.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const { getRandomInt } = require("./utilities");

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

// app.get("/addGirl", async (req, res) => {
//   try {
//     const newGirl1 = {
//       name: "Lee Jiyeon",
//       age: 28,
//       active: true,
//       image: [
//         "https://znews-photo.zingcdn.me/w660/Uploaded/bzivoxbp/2019_07_30/ji1.jpg",
//         "https://ss-images.saostar.vn/wp700/pc/1614163096205/201910011536105449_d.jpg",
//         "https://i.pinimg.com/564x/9e/aa/6b/9eaa6b91bccbb097834e9a59c26ff370.jpg",
//       ],
//       position: "20",
//       description: "Hello everyone, im Jiyeon",
//     };

//     const newGirl2 = {
//       name: "Bae Suzy",
//       age: 22,
//       active: true,
//       image: [
//         "https://icdn.dantri.com.vn/thumb_w/680/2022/07/08/screen-shot-2022-07-08-at-122941-1657258348078.png",
//         "https://znews-photo.zingcdn.me/w660/Uploaded/qfssu/2022_08_03/suzy_anna_thay_150_bo_trang_phuc_2.jpg",
//         "https://2sao.vietnamnetjsc.vn/images/2018/03/13/12/56/suzy-avata.jpg",
//         "https://asset.kompas.com/crops/gSAKrVM_KBQ33Ckoz38t_lEa3MI=/0x0:900x600/750x500/data/photo/2018/10/21/2765840047.jpeg",
//         "https://vnn-imgs-f.vgcloud.vn/2020/04/13/23/suzy-tinh-dau-quoc-dan-so-huu-khoi-tai-san-chuc-trieu-do-1.jpg",
//       ],
//       position: "1",
//       description: "Hello everyone, im Bae Suzy",
//     };

//     const newGirl3 = {
//       name: "Kim Irene",
//       age: 29,
//       active: true,
//       image: [
//         "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2020/08/14/Ly-do-Irene-Red-Velvet-la-idol-nu-hang-dau-Kpop_1.jpg",
//         "https://pict.sindonews.net/dyn/850/pena/news/2020/10/23/187/205532/irene-red-velvet-minta-maaf-tentang-perilaku-kasarnya-xmn.jpg",
//         "https://bloganchoi.com/wp-content/uploads/2019/05/irene-rv-9.jpg",
//         "https://media.thieunien.vn/thumb/uploads/2021/08/12/chua-biet-irene-xinh-co-nao-thi-nhin-vao-loat-anh-do-sac-voi-cac-my-nhan-khac-la-hieu_25254.jpg",
//       ],
//       position: "7",
//       description: "Hello everyone, im Kim Irene",
//     };

//     const addGirl1 = new Girl(newGirl1);
//     const addGirl2 = new Girl(newGirl2);
//     const addGirl3 = new Girl(newGirl3);

//     await addGirl1.save();
//     await addGirl2.save();
//     await addGirl3.save();
//     console.log("Insert girl done !!");
//   } catch (error) {
//     console.log("Error at post /addGirl ", error);
//   }
// });

app.get("/", async (req, res) => {
  try {
    const girlResult = await Girl.find();
    console.log("girlResult", girlResult);
    if (girlResult) {
      const randomGirlIndex = getRandomInt(0, girlResult.length - 1);
      res.header("Access-Control-Allow-Origin", "*");
      res.send(JSON.stringify(girlResult[randomGirlIndex]));
    }
  } catch (error) {
    console.log("Error at get / ", error);
  }
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
