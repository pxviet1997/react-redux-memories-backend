import Post from '../../models/post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).send('Posts!');
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
}