exports.handler = async (event, context) => {
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

    // Render the data on the webpage
    renderWebflowItems(data.items);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Items fetched successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

function renderWebflowItems(items) {
  const itemList = items.map(item => JSON.stringify(item)).join('<br>');
  document.getElementById('item-list').innerHTML = itemList;
}
