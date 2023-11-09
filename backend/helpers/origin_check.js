const allowedOrigins = ['http://localhost:3000'];

let originMiddle = (req, res, next) => {
    let origin = req.headers['origin'];
    console.log('origin: ', origin);
    var index = allowedOrigins.indexOf(origin);
    if (index > -1) {
        next();
    } else {
        return res.json({ status: 401, message: "Unauthorized Request" });
    }
}

module.exports.origin = originMiddle;