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
  
  module.exports = {
    getAll
  };