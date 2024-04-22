const axios = require("axios");
const https = require("https");
// you can find this data in the service key, userData should return the object like this {
//   clientid: "clientid",
//   clientsecret: "clientsecret",
//   granttype: "client_credentials",
//   tokenendpoint: "tokenendpoint",
// }; 
const userData = require("./userData");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const getBearer = async function (data) {
  const params = {
    clientid: userData["clientid"],
    clientsecret: userData["clientsecret"],
    tokenendpoint: userData["tokenendpoint"] + `?grant_type=client_credentials&response_type=token`,
  };

  const basicAuth =
    "Basic " + Buffer.from(params["clientid"].toString("base64") + ":" + params["clientsecret"]).toString("base64");
  const response = await axios.get(params["tokenendpoint"], {
    headers: {
      Authorization: basicAuth,
      "User-Agent": "PostmanRuntime/7.35.0",
      Accept: "*/*",
      Connection: "keep-alive",
    },
    httpsAgent: agent,
  });
  return `Bearer ${response.data.access_token}`;
}.bind(this);
module.exports = getBearer;
