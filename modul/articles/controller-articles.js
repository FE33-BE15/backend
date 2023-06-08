const Models = require("../../database/models");
const Article = Models.articles;

const _ = require("lodash");

const createArticle = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const slug = _.kebabCase(title);

    const newArticle = await Article.create({
      title,
      slug,
      content,
      image,
    });

    return res.status(200).json({ result: newArticle });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const listArticle = async (req, res) => {
  try {
    const articles = await Article.findAll();

    return res.status(200).json({ result: articles });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const articleById = async (req, res) => {
  try {
    const { id } = req.params;
    const articles = await Article.findByPk(id);

    return res.status(200).json({ result: articles });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createArticle, listArticle, articleById };
