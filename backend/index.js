import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

// Middleware
app.use(cors({
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  // Allow all common HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow common headers
  credentials: true,  // Allow credentials (cookies, authorization headers, etc)
  maxAge: 86400  // Cache preflight requests for 24 hours
}));


app.use(express.json());

// Routes
app.use('/api', apiRoutes);





// Start the Express server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});