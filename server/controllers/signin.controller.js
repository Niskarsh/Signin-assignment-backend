import request from 'request'
import 'babel-polyfill'
// var Linkedin = require('node-linkedin')(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.AUTHORIZE);
export const linkedin = async (req, res) => {
    // var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages']
    // await Linkedin.auth.authorize(res, scope, process.env.STATE);

    // await request.get('https://www.linkedin.com/oauth/v2/authorization')
    //     .query({
    //         response_type: 'code',
    //         client_id: process.env.CLIENT_ID,
    //         redirect_uri: "http://localhost:3001/authorize",
    //         state: process.env.STATE,
    //         scope: 'r_basicprofile'
    //     })
    //     .then(data => res.send(data))
    //     .catch(e => res.status(500).send(e))
    // .end((err, resp) => {
    //     if (err) {
    //         res.sendStatus(500).send(err)
    //     }
    //     res.send (resp)


    //     // Do something
    // });

    request(`https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3001/authorize&state=${process.env.STATE}&scope=${process.env.SCOPE}`, (error, response, body) => {
        
        if(!error) {
            res.send (body)
        }
    });





    // let options = {
    //     withCredentials: true,
    //     method: 'GET',
    //     uri: `https://guarded-plains-96027.herokuapp.com/signin`
    //     // form: {
    //     //     email: values.emailLogin,
    //     //     password: values.passwordLogin,
    //     // }

    // }

    // await request(options).then(data => {
    //     console.log(`in`)
    //     this.setState({ rec2: data })
    //     // store.dispatch(login(JSON.parse(data)));
    //     // notify('success', `Hi ${JSON.parse(data).nickname}`, `You\'re in`)
    //     // val = true
    // }, () => {
    //     // notify('error', 'Signin failed', 'Invalid creds, try again')
    // }).catch((e) => {
    //     // notify('error', 'Signin failed', 'Invalid creds, try again')
    //     // notify( 'error', 'Signin failed', 'Internal server error, bear with us')
    // });




    // res.send("hi")
}