import mongoose from "mongoose";

const DB_CONNECTION_STRING = "mongodb://127.0.0.1:27017/notes";

export const connection = mongoose.connect;

export const init_db = async () => {
  connection(DB_CONNECTION_STRING, { autoIndex: false })
    .then(() => {
      console.log('Successfully connected to "notes" database ✅');
      console.log(
        "Mongoose Connection ReadyState:",
        !!mongoose.connection.readyState
      );
    })
    .catch((err) => console.error(err));
};
