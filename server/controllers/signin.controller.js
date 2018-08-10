import request from 'superagent'
import 'babel-polyfill'
// var Linkedin = require('node-linkedin')(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.AUTHORIZE);
export const linkedin = async (req, res) => {
    // var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages']
    // await Linkedin.auth.authorize(res, scope, process.env.STATE);
    
    await request.get('https://www.linkedin.com/oauth/v2/authorization')
        .query({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            redirect_uri : process.env.AUTHORIZE,
            state : process.env.STATE,
            scope : 'r_basicprofile'
        })
        .then(data => res.send (data.text))
        .catch (e => res.status(500).send(e))
        // .end((err, resp) => {
        //     if (err) {
        //         res.sendStatus(500).send(err)
        //     }
        //     res.send (resp)


        //     // Do something
        // });




    // res.send("hi")
}