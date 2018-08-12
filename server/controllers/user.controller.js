
import request from 'request-promise'
export const userProfile = async (req, res) => {
    console.log (req.headers.authorization)
    let options = {
        method: 'GET',
        uri: 'https://api.linkedin.com/v1/people/~?format=json',
        headers: {
            'Authorization': req.headers.authorization
        }

    }

    await request(options).then( data => {
        res.send (data)
        
    }).catch((e) => {
        res.status(500).send (e)
    });



}