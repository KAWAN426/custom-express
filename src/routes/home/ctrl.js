const getRes = (req, res) => {
  res.status(200).json("Hello User!");
};

module.exports = { getRes };