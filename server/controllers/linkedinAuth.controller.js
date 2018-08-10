

export const authCodefetcher = (req, res) => {

    const authorizationCode = req.query.code
    res.send (authorizationCode)
}



export const accessCodefetcher = (req, res) => {
    
}