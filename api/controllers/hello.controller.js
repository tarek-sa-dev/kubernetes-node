const hello = (req, res) => {
  try {
    const name = req.query.name
    res
      .status(200)
      .send(
        `<h2>Hello <strong style="color:green;">${name}</strong> from kubernetes.</h2>`
      )
  } catch (err) {
    console.error(err)
    return res.status(500).send('<h1 style="color:red;">Error</h1>')
  }
}

module.exports = { hello }
