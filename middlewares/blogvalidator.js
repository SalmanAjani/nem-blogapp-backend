const blogvalidator = (req, res, next) => {
  const { title, description, image, user } = req.body;
  if (!title || !description || !image || !user) {
    return res.status(400).json({ message: "All fields are mandatory." });
  }

  next();
};

module.exports = { blogvalidator };
