const shortid = require("shortid");
const Url = require ('../model/urlModel');

async function  shortenUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: 'Url is required'});
    const shortId =  shortid();

    await Url.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: []
 });

 return res.json({ id: shortId});
}

module.exports = {
    shortenUrl
};