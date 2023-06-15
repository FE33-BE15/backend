const { Artikel } = require("../../database/models");

const getAll = async (req, res) => {
  try {
    const allArticle = await Artikel.findAll();

    if (allArticle.length < 1) {
      return res.status(404).json({
        message: "Data artikel belum ada!",
      });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data artikel!",
      allArticle,
    });
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Artikel.findByPk(id);

    if (!article) {
      return res.status(404).json({
        message: "Artikel tidak ditemukan!",
      });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data artikel berdasarkan ID!",
      article,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data artikel berdasarkan ID!",
    });
  }
};

module.exports = {
  getAll,
  getById,
};
