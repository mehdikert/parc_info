const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token.' });
        console.log(error);
    }
};

module.exports = verifyToken