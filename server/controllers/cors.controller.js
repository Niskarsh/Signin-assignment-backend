export const authentication = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Expose-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next()
}
