exports.handler = async function (event, context) {
  try {
    console.log('Update agent email function called.');
    
    // Parse the data from the request body
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    // ... rest of the code




exports.handler = async function (event, context) {
  try {
    const data = JSON.parse(event.body);

    // Assuming data contains a property 'agentEmail' with the new email
    const newEmail = data.agentEmail;

    // TODO: Use the Webflow API to update the agent's email with the provided data
    // Replace this with the actual Webflow API call

    // Simulated success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Agent email updated successfully', newEmail }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating agent email' }),
    };
  }
};
