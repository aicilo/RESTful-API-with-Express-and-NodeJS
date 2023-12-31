import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    // const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;

    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: "Authorization Failed",
    });
  }
};
