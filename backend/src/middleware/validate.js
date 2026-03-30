export const validateUser = (fields) => (req, res, next) => {
  console.log("Validando usuario...")
  
  for (let field of fields) {
    if (!req.body[field]) {
      return res.status(400).json({
        error: `Falta el campo ${field}`
      });
    }
  }
  next();
};