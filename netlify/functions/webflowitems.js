const fetch = require('node-fetch');

const handler = async (event, context) => {
  const apiKey = 'a6f5957da2cbed217ecb43cf800e9a43ee88d6b53dbb73f5660753a015840354';
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

module.exports = { handler };
