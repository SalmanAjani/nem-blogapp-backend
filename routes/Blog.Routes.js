const express = require("express");

const {
  getAllBlogs,
  addBlog,
  updateBlog,
  getSingleBlog,
  deleteBlog,
  getBlogByUserId,
} = require("../controllers/Blog.Controller");

const { blogvalidator } = require("../middlewares/blogvalidator");

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", blogvalidator, addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getSingleBlog);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getBlogByUserId);

module.exports = blogRouter;
