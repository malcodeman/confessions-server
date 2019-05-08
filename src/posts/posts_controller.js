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

    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
}
