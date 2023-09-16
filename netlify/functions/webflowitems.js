
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/wfapi"></script>
  <title>API Page</title>
</head>
<body>
  <button onclick="fetchWebflowItems()">Fetch Webflow Items</button>

  <script>
    async function fetchWebflowItems() {
      const apiKey = 'YOUR_API_KEY'; // Replace with your Webflow API key
      const collectionId = 'YOUR_COLLECTION_ID'; // Replace with your Webflow collection ID
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
        console.log('Items from Webflow:', data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
  </script>
</body>
</html>
