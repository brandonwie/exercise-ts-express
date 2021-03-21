import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

// Setup
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['brandon'] }));

// Routers
app.use(router);

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
