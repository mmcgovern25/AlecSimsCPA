import express from 'express';

const app = express();
const port = 3001; // You can change the port if needed

// Define a route to handle form submissions
app.post('/api/submit-form', (req, res) => {
  // Handle form submission logic here
  // This is where you would send an email with the submitted form data
  // For now, we'll just send a simple response
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
