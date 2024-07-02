const axios = require("axios");

const password = process.env.API_KEY;
const username = process.env.USERNAMES;
const domain = process.env.DOMAIN;

const login = `${username}:${password}`;
const encodedLogin = Buffer.from(login).toString("base64");
const auth = `Basic ${encodedLogin}`;

async function createIssue(req , res , summary , description , projectKey, issueType) {
    try {
        const baseurl = "https://" + domain + ".atlassian.net";
        
        const data = {
            fields: {
                summary: summary,
                description: description,
                project: {
                    key: projectKey
                },
                issuetype: {
                    name: issueType
                }
            }
        };
        const config = {
            method: "post",
            url: baseurl + "/rest/api/2/issue",
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            },

        }

        console.log(config);
        const response = await axios.post(`${baseurl}/rest/api/2/issue` , config , data);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "erreure de serveur" });

    }
}

module.exports = {createIssue}