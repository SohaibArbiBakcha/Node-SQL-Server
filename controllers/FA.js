const { getConnection, getSql } = require("../database/connection");
const { querys } = require("../database/querys");

exports.getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllFA);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.createNewProduct = async (req, res) => {
  const { CodeFA, FN } = req.body;
  // let { quantity } = req.body;

  // validating
  // if (description == null || name == null) {
  //   return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  // }

  // if (quantity == null) quantity = 0;
  // console.log(getSql());
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("CodeFA", getSql().Numeric, CodeFA)
      .input("FN", getSql().VarChar, FN)
      .query(querys.addNewProduct);

    res.json({ CodeFA, FN });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const pool = await getConnection();
    // console.log(req.params);
    const result = await pool
      .request()
      .input("id", getSql().Numeric, req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
