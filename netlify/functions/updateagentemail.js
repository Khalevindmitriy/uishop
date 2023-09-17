// functions/updateAgentEmail.js

exports.handler = async function (event, context) {
  try {
    // Parse the data from the request body
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    // Replace with your actual Webflow API endpoint for updating an item
    const endpoint = `https://api.webflow.com/collections/633cdfe2191b153dc65c63a9/items/63cec1473c544e2f09c4a930`;
    console.log('Constructed endpoint:', endpoint);

    // Replace with your actual Webflow API key
    const apiKey = 'a6f5957da2cbed217ecb43cf800e9a43ee88d6b53dbb73f5660753a015840354';

    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'agent-email': data.newAgentEmail // Assuming 'agent-email' is the field to update
        }
      })
    });

    const responseData = await response.json();

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
