<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Page</title>
</head>
<body>
  <script>
    async function fetchWebflowItems() {
      try {
        const response = await fetch('/.netlify/functions/webflowitems');

        if (!response.ok) {
          throw new Error('Error fetching items from Webflow API');
        }

        const data = await response.json();
        console.log('Items from Webflow:', data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    // Call the function when the page loads
    window.addEventListener('load', fetchWebflowItems);
  </script>
</body>
</html>
