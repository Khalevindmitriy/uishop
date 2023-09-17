// functions/updateAgentEmail.js

exports.handler = async function (event, context) {
  try {
    // Parse the data from the request body
    const data = JSON.parse(event.body);

    // TODO: Use the Webflow API to update the agent's email with the provided data

    // Simulated success response (replace this with actual Webflow API call)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Agent email updated successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating agent email' }),
    };
  }
};
