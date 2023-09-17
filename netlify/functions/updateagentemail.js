// functions/updateAgentEmail.js

exports.handler = async function (event, context) {
  try {
    console.log('Update agent email function called.');
    
    // Parse the data from the request body
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    // Simulated success response (replace this with actual Webflow API call)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Agent email updated successfully' }),
    };
  } catch (error) {
    console.error('Error updating agent email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating agent email' }),
    };
  }
};
