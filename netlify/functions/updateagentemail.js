// functions/updateAgentEmail.js

exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    const collectionId = 'YOUR_COLLECTION_ID'; // Replace with your actual Webflow collection ID
    const itemId = 'YOUR_ITEM_ID'; // Replace with your actual item ID
    const apiKey = 'YOUR_WEBFLOW_API_KEY'; // Replace with your actual Webflow API key

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

    console.log('Response from Webflow API:', responseData); // Log the response from Webflow API

    if (response.ok) {
      return {
        statusCode: response.status,
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
