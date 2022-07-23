const homePost = (req, res) => {
  const data = req.body;
  console.log(data);
};

const homeGet = (req,res) => {
  res.send("My Web Server");
};

module.exports = {
  homePost,
  homeGet
};