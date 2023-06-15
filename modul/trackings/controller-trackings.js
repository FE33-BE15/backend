const { Tracking, Makanan } = require("../../database/models");

const addTracking = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;

    if (!user) {
      return res.status(401).json({
        message: "User tidak ada!",
      });
    }

    const data = await Tracking.create({
      id_makanan: id,
      id_user: user.id,
    });

    return res.status(200).json({
      message: "Berhasil menambahkan makanan!",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getbyuid = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;

    if (!user) {
      return res.status(401).json({
        message: "User tidak ada!",
      });
    }

    const allTracking = await Tracking.findAll({
      where: {
        id_user: id,
      },
      include: [
        {
          model: Makanan,
          as: "nama_makanan",
        },
      ],
    });

    if (allTracking < 1) {
      return res.status(404).json({
        message: "tracking masih kosong!",
      });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data makanan berdasarkan user ID!",
      allTracking,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteByid = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;

    if (!user) {
      return res.status(401).json({
        message: "User tidak ada!",
      });
    }

    const trackings = await Tracking.findByPk(id);

    if (!trackings) {
      return res.status(404).json({
        message: "Data tidak ditemukan!",
      });
    }

    await Tracking.destroy({
      where: { id },
    });

    return res.status(200).json({
      message: "Berhasil menghapus data tracking",
      trackings,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteAll = async (req, res) => {
    try {
      const user = req.user;
      const id = req.params.id;
  
      if (!user) {
        return res.status(401).json({
          message: "User tidak ada!",
        });
      }
  
      const trackings = await Tracking.findAll({
          where: {
              id_user: id
          }
      });
  
      if (trackings.length < 1) {
        return res.status(404).json({
          message: "Todo masih kosong!",
        });
      }
      await Tracking.destroy({
        //   where: { id },
        where: {
          id_user: id
        },
        truncate: true,
      });
  
      return res.status(200).json({
        success: true,
        message: "Berhasil menghapus semua tracking",
        trackings,
      });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
  addTracking,
  getbyuid,
  deleteByid,
  deleteAll,
};
