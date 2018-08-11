import request from 'request-promise'

export const accessCodeFetcher = async (req, res) => {
    const authorizationCode = req.query.code

    let options = {
        method: 'POST',
        uri: `https://www.linkedin.com/oauth/v2/accessToken`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: `authorization_code`,
            code: authorizationCode,
            redirect_uri: `http://localhost:3001/authorize`,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        }

    }

    await request(options).then(data => {
        res.send(data)
    }).catch(e => {
        res.send(e)
    });

}
