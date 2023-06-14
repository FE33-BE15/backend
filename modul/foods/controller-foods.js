const { Makanan } = require("../../database/models");

const getAll = async (req, res) => {
  try {
    const allFood = await Makanan.findAll();

    if (allFood.length < 1) {
      return res.status(404).json({
        message: "Data makanan belum ada!",
      });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data makanan!",
      allFood,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
};
