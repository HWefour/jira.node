const axios = require("axios");

const password = process.env.API_KEY;
const username = process.env.USERNAMES;
const domain = process.env.DOMAIN;


const login = `${username}:${password}`;
const encodedLogin = Buffer.from(login).toString("base64");
const auth = `Basic ${encodedLogin}`;

async function getIssue(req , res) {
  try {
    const baseurl = "https://" + domain + ".atlassian.net";

    const config = {
      method: "get",
      url: baseurl + "/rest/agile/latest/board/" + req.params.id + "/issue",
      headers: {
        "Content-Type": "application/json",
        "Authorization": auth ,
      },
    };
    console.log(config);
    const response = await axios.request(config);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "erreure de serveur" });
  }
}

module.exports =  {getIssue}