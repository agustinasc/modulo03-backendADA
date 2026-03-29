export const validateUser = (fields) => (req, res, next) => {
  for (let field of fields) {
    if (!req.body[field]) {
      return res.status(400).json({
        error: `Falta el campo ${field}`
      });
    }
  }
  next();
};