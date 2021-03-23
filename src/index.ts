import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

// Setup
const app = express();

// body-parser is deprecated
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['brandon'] }));

// Router
app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
