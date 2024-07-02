const axios = require("axios");

const password = process.env.API_KEY;
const username = process.env.USERNAMES;
const domain = process.env.DOMAIN;



login = `${username}:${password}`;
encodedLogin = Buffer.from(login).toString("base64");
auth = `Basic ${encodedLogin}`;

async function getBoard(req , res) {
  try {
    const baseurl = "https://" + domain + ".atlassian.net";

    const config = {
      method: "get",
      url: baseurl + "/rest/agile/latest/board",
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

module.exports = {getBoard};
