import Post from "./posts_model";

export async function create(req, res, next) {
  try {
    const post = await Post.create(req.body);

    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const options = {
      page: Number(req.query.page) || 0,
      limit: Number(req.query.limit) || 24
    };
    const posts = await Post.find({})
      .sort({ date: "desc" })
      .skip(options.page * options.limit)
      .limit(options.limit);
    const count = await Post.countDocuments({});
    const pagination = {
      current_page: options.page,
      total_item_count: count,
      total_page: parseInt(count / options.limit),
      next: {
        page: (options.page += 1)
      }
    };

    res.status(200).send({ posts, pagination });
  } catch (error) {
    res.status(400).send(error);
  }
}
