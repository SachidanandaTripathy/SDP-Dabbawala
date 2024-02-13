const jwt = require("jsonwebtoken");
const User = require('../Models/Users');

const authMiddleware = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization.split(" ")[1];
    
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decodedToken.userId).select(
      "-password"
    );

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;

    next();
    
  } catch (error) {
    console.error("Authentication Error:", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;