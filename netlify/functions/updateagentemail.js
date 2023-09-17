function updateAgentEmail() {
  const newAgentEmail = agentEmailInput.value;
  const selectedItemId = dropdown.value;

  // Disable the button during the update process
  updateButton.disabled = true;

  // Show progress indicator
  progressIndicator.style.display = 'block';

  // Retrieve the collection ID and item ID associated with the selected item
  const selectedItem = data.find(item => item._id === selectedItemId);
  const collectionId = selectedItem && selectedItem.collectionId;
  const itemId = selectedItem && selectedItem.itemId;

  if (!collectionId || !itemId) {
    console.error('Could not find collection ID or item ID for the selected item.');
    return;
  }

  // Construct the request URL
  const apiUrl = `https://api.webflow.com/collections/${collectionId}/items/${itemId}`;

  // Construct the request body
  const requestBody = {
    fields: {
      'agent-email': newAgentEmail
    }
  };

  fetch(apiUrl, {
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
