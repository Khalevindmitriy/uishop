// functions/updateAgentEmail.js

exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    const collectionId = '633cdfe2191b153dc65c63a9'; // Actual Webflow collection ID
    const itemId = '63cec1473c544e2f09c4a930'; // Actual item ID
    const apiKey = 'a6f5957da2cbed217ecb43cf800e9a43ee88d6b53dbb73f5660753a015840354'; // Actual Webflow API key

    const endpoint = `https://api.webflow.com/v2/collections/${collectionId}/items/${itemId}`;

    const options = {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({ 'fields.agent-email': data.newAgentEmail }) // Assuming 'agent-email' is the field to update
    };

    const response = await fetch(endpoint, options);
    const responseData = await response.json();

    console.log('Response from Webflow API:', responseData); // Log the response

    // Check if the response was successful
    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Agent email updated successfully', data: responseData }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Content-Type': 'application/json'
        }
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Error updating agent email', error: responseData }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Content-Type': 'application/json'
        }
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating agent email', error: error.message }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
      }
    };
  }
};
