function updateAgentEmail() {
  const newAgentEmail = agentEmailInput.value;

  // Disable the button during the update process
  updateButton.disabled = true;

  // Show progress indicator
  progressIndicator.style.display = 'block';

  // Construct the request body
  const requestBody = {
    fields: {
      'agent-email': newAgentEmail
    }
  };

  // Replace 'YOUR_ITEM_ID' with the actual item ID you want to update
  const itemId = 'YOUR_ITEM_ID';

  fetch(`https://api.webflow.com/collections/YOUR_COLLECTION_ID/items/${itemId}`, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Agent email updated:', newAgentEmail);
    
    // Enable the button after the update is complete
    updateButton.disabled = false;

    // Hide progress indicator
    progressIndicator.style.display = 'none';

    // Show confirmation message
    confirmationMessage.innerHTML = 'Agent email updated successfully!';
    confirmationMessage.style.display = 'block';
  })
  .catch(error => {
    console.error('Error updating agent email:', error);
    
    // Enable the button after the update is complete
    updateButton.disabled = false;

    // Hide progress indicator
    progressIndicator.style.display = 'none';

    // Show error message
    confirmationMessage.innerHTML = 'Error updating agent email. Please try again.';
    confirmationMessage.style.display = 'block';
  });
}
