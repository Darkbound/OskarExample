// import { MongoClient } from "mongodb";

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// if (!MONGODB_DB) {
//   throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
// }

// // /**
// //  * Global is used here to maintain a cached connection across hot reloads
// //  * in development. This prevents connections growing exponentially
// //  * during API Route usage.
// //  */
// let cached = global.mongo;

// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };
//     cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
//       return {
//         client,
//         db: client.db(MONGODB_DB),
//       };
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

import mongoose from "mongoose";

const connection = { isConnected: -1 };

export async function dbConnect(): Promise<void> {
  if (connection.isConnected > 0) {
    return;
  }

  try {
    const db = await mongoose.connect(`${MONGODB_URI}${MONGODB_DB}`, {
      useCreateIndex: true,
      useFindAndModify: false,
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    // console.log(e);
    //What to do with the error if not console log it?
  }
}
