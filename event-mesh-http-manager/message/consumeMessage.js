const axios = require("axios");
const getBearer = require("../auth/getBearer");
const urls = require("../tools/getUrls");
const checkCredentional = require("../tools/checkCredentionals");

const args = process.argv;

checkCredentional(args, "Please provide q name");

const qName = encodeURIComponent(`com/sap/test/${args[2]}`);
const url = `${urls.messages}/messagingrest/v1/queues/${qName}/messages/consumption`;

async function createMessage(i) {
  const token = await getBearer();
  try {
    const response = await axios({
      method: "POST",
      url: url,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
        "x-qos": 0,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

createMessage();
