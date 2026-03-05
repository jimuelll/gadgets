//SQL
const connection = require("../config/db");
//get all products
exports.getAllGadgets = (req, res) => {
  connection.query("SELECT * FROM gadgets", (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
};

exports.createProducts = (req, res) => {
  const { id, itemName, unitPrice, quantity, supplier } = req.body;
  connection.query(
    "INSERT INTO gadgets (id, itemName, unitPrice, quantity, supplier) VALUES (?, ?, ?, ?, ?)",
    [id, itemName, unitPrice, quantity, supplier],
    (err, result) => {
      if (err) throw err;
      res.json({
        message: "User created successfully",
        id: result.insertId,
      });
    },
  );
};

