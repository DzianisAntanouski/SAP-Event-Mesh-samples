const axios = require("axios");
const getBearer = require("../auth/getBearer");
const urls = require("../tools/getUrls");
const checkCredentional = require("../tools/checkCredentionals");

const args = process.argv;

checkCredentional(args, "Please provide q name and topic name");

const qName = encodeURIComponent(`com/sap/test/${args[2]}`);
const topicName = encodeURIComponent(`com/sap/test/${args[3]}`);

const url = `${urls.managment}/hub/rest/api/v1/management/messaging/queues/${qName}/subscriptions/${topicName}`;

async function createQueue() {
  const token = await getBearer();
  try {
    const response = await axios({
      method: "PUT",
      url: url,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
    debugger;
  }
}

createQueue();
