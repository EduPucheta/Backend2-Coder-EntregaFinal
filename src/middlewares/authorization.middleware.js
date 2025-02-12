export const authorization = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ status: "error", msg: "Unauthorized! No user found." });
    }

    if (req.user.role !== role) {
      return res.status(403).json({ status: "error", msg: "Forbidden! Insufficient permissions." });
    }

    next();
  };
};
