import express from 'express';
import type { Request, Response } from 'express';

const app = express();

// Define routes
app.get('/', (req:Request, res:Response) => {
  res.json({ name: 'World' });
});

app.get('/about', (req:Request, res:Response) => {
  res.json({ message: 'About Page' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
              