const output = {
  home : (req,res) => {
    res.send("My Web Server");
  }
}

const process = {
  home : (req, res) => {
    const data = req.body;
    console.log(data);
  }
}

module.exports = {
  output,
  process
};