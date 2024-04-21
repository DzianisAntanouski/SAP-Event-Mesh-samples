const { default: axios } = require("axios");
const getBearer = require("../auth/getBearer");
const urls = require("../tools/getUrls");

const url = `${urls.managment}/hub/rest/api/v1/management/messaging/queues`;

async function getQueues() {
  const token = await getBearer();
  const response = await axios(url, {
    headers: {
      Authorization: token,
    },
  });
  console.log(response.data);
}

getQueues();
