import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import categoryRoutes from './routes/CategoryRoute.js';
import productRoutes from './routes/ProductRoute.js';
import discountRoutes from './routes/DiscountRoute.js';
import orderItemRoutes from './routes/OrderItemRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/order-items', orderItemRoutes);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//npm run server