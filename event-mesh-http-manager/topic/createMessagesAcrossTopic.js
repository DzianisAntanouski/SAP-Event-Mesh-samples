const axios = require("axios");
const getBearer = require("../auth/getBearer");
const urls = require("../tools/getUrls");
const checkCredentional = require("../tools/checkCredentionals");

const args = process.argv;

checkCredentional(args, "Please provide topic name");

const topicName = encodeURIComponent(`com/sap/test/${args[2]}`);
const url = `${urls.messages}/messagingrest/v1/topics/${topicName}/messages`;

async function createMessage(i) {
  const token = await getBearer();
  try {
    axios({
      method: "POST",
      url: url,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
        "x-qos": 0,
      },
      data: {
        message: `message number ${i}`,
      },
    });
    console.log("request sended");
  } catch (error) {
    console.log(error.message);
  }
}

for (let i = 0; i < (args[3] || 1); i++) {
  createMessage(i);
}
