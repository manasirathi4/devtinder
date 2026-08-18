const authMiddleware = (req, res, next) => {
    const isLoggedIn = true;

    if (isLoggedIn) {
        next();
    } else {
        res.send("Please login first");
    }
};

module.exports = authMiddleware;