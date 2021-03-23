"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
// Setup
var app = express_1.default();
var port = 3000 || process.env.PORT;
// body-parser is deprecated
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['bbbbb'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Server running on port 3000...');
});
