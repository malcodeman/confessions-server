import mongoose from "mongoose";

import Post from "../posts/posts_model";
import log from "./log";

const { MONGODB_URI } = process.env;

async function drop() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true
    });
    const count = await Post.countDocuments({});
    await mongoose.connection.db.dropDatabase();

    log(`Dropped database\nRemoved ${count} posts`);
    process.exit();
  } catch (error) {
    log(error);
    process.exit(1);
  }
}

drop();
