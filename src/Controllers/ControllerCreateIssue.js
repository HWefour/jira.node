const axios = require("axios");

const password = process.env.API_KEY;
const username = process.env.USERNAMES;
const domain = process.env.DOMAIN;

const login = `${username}:${password}`;
const encodedLogin = Buffer.from(login).toString("base64");
const auth = `Basic ${encodedLogin}`;

async function createIssue(req, res) {
  const { summary, description, projectKey, issueType } = req.body;

  try {
    const baseurl = "https://" + domain + ".atlassian.net";

    const data = JSON.stringify({
      fields: {
        summary: summary,
        description: description,
        project: { key: projectKey },
        issuetype: { name: issueType }
      }
    });

    const config = {
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await axios.post(
      `${baseurl}/rest/api/2/issue`,
      data,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { createIssue };