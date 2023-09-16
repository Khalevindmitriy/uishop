// functions/getWebflowItems.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const apiKey = '740dca89f913ea8e580c5dbc3512860bf6cca26f4ef23ab6edffa1dea1c0fff3';
  const collectionId = '633cdfe2191b153dc65c63a9';
  const url = `https://api.webflow.com/collections/${collectionId}/items`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching items from Webflow API');
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
