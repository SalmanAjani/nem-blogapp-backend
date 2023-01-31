const mongoose = require("mongoose");
const { User } = require("../models/User");
const { Blog } = require("../models/Blog");

// Get all blogs
const getAllBlogs = async (req, res) => {
  let blogs;

  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }
  return res.status(200).json({ blogs });
};

// Add new blog
const addBlog = async (req, res) => {
  const { title, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }

  if (!existingUser) {
    res.status(400).json({ message: "Unable to find user with this id." });
  }

  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong, unable to add Blog", error });
  }
  return res.status(200).json({ message: "Blog added successfully", blog });
};

// Update blog
const updateBlog = async (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;
  let blog;

  try {
    blog = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!blog) {
    return res
      .status(500)
      .json({ message: `Unable to find the blog with id ${id}` });
  }
  return res
    .status(200)
    .json({ message: `Blog with id ${id} updated successfully` });
};

// Get single blog
const getSingleBlog = async (req, res) => {
  const id = req.params.id;
  let blog;

  try {
    blog = await Blog.findById(id);
  } catch (error) {
    return console.log(error);
  }

  if (!blog) {
    return res.status(404).json({ message: `Blog with id ${id} not found.` });
  }
  return res.status(200).json({ blog });
};

// Delete blog
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  let blog;

  try {
    blog = await Blog.findByIdAndRemove(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: `Blog with id ${id} not found.` });
  }
  return res
    .status(200)
    .json({ message: `Blog with id ${id} deleted successfully.` });
};

//Get users blog
const getBlogByUserId = async (req, res) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (error) {
    return console.log(error);
  }
  if (!userBlogs) {
    return res
      .status(404)
      .json({ message: "No blogs found created by this user." });
  }
  return res.status(200).json({ blogs: userBlogs });
};

module.exports = {
  getAllBlogs,
  addBlog,
  updateBlog,
  getSingleBlog,
  deleteBlog,
  getBlogByUserId,
};
