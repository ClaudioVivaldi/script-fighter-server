module.exports = function errorHandler(err, req, res, next) {
  if (err) {
    if (err.name === 'SequelizeValidationError') {
      res.status(400).json({ message: err.errors[0].message });
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: err.errors[0].message });
    } else if (err.name === 'LoginError') {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ err });
    }

  } else {
    res.status(500).json({ message: 'Internal server error.' })
  }
}