<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webflow Item Fetcher</title>
</head>
<body>
  <h1>Webflow Item Fetcher</h1>

  <script>
    async function fetchWebflowItems() {
      const apiKey = 'a6f5957da2cbed217ecb43cf800e9a43ee88d6b53dbb73f5660753a01584035'; // Replace with your Webflow API key
      const collectionId = '633cdfe2191b153dc65c63a9'; // Replace with your Webflow collection ID
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

    // Call the function when the window has finished loading
    window.addEventListener('load', fetchWebflowItems);
  </script>
</body>
</html>
