import mongoose from "mongoose";
import faker from "faker";
import { argv } from "yargs";
import chalk from "chalk";

import Post from "../posts/posts_model";
import log from "./log";

const { MONGODB_URI } = process.env;

function calcPercentage(value, total) {
  return (100 * value) / total;
}

async function seed() {
  const posts = argv.posts || 24;

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true
    });

    for (let i = 0; i < posts; i++) {
      await Post.create({ body: faker.random.words() });

      log(`${calcPercentage(i, posts).toFixed(2)}%`);
    }

    const count = await Post.countDocuments({});

    log(`Created: ${posts} posts\nTotal: ${count} posts`);
    process.exit();
  } catch (error) {
    log(error);
    process.exit(1);
  }
}

seed();
