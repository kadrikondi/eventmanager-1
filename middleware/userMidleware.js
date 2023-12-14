const config = require('../config/config')
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken= (req, res, next)=> {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next(); // Pass the request to the next middleware
    });
}

module.exports =authenticateToken