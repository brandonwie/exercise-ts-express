import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginControllers';

// Setup
const app = express();

// body-parser is deprecated
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['brandon'] }));

// Routers
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});
