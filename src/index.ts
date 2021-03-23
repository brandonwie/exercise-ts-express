import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

// Setup
const app = express();

const port = 3000 || process.env.PORT;

// body-parser is deprecated
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['bbbbb'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
