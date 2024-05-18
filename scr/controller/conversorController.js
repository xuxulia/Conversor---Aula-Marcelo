const conversorService = require("../script/conversor.js");

async function getAllConversor(req, res) {
  try {
    const rows = await conversorService.getAllConversor();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting conversors",
      body: error.message,
    });
  }
}

async function createConversor(req, res) {
  const { id_moeda, data_1, valor_cota, valor_orig, valor_conv } = req.body;

  try {
    await conversorService.createConversor(
      id_moeda,
      data_1,
      valor_cota,
      valor_orig,
      valor_conv
    );

    res.status(201).json({
      message: "Success!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error adding conversor!",
      error: error.message,
    });
  }
}

module.exports = {
  getAllConversor,
  createConversor,
};
