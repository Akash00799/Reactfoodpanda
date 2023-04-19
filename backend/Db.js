const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Akash007:Romanharshita@cluster0.stbvpcv.mongodb.net/FOODPANDAmern?retryWrites=true&w=majority";
// const mongoURI =
//   "mongodb://Akash007:<password>@ac-yduqsrw-shard-00-00.stbvpcv.mongodb.net:27017,ac-yduqsrw-shard-00-01.stbvpcv.mongodb.net:27017,ac-yduqsrw-shard-00-02.stbvpcv.mongodb.net:27017/FOODPANDAmern?ssl=true&replicaSet=atlas-6sy75x-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected successfully");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });
          // if (err) console.log(err);
          // else {
          //   global.food_items = data;
          // }
        });
      }
    }
  );
};

module.exports = mongoDB;
