import express, { application } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import session from "express-session";
import authRouter from "./routers/auth.js";
import mailRouter from "./routers/mailer.js";

const app = express();

app.use(express.json());
app.use(cors());

/*******************************************************/
/*Setup ratelimiters for authentication and dos attacks*/
/*******************************************************/
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const baseLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

/********************/
/*Setup Middleware*/
/********************/
app.use(helmet());
app.use(
  session({
    secret: "keyboard cat",
    resave: false, //If its true every route, it will resave the session.. otherwise it doesn't
    saveUninitialized: true,
    cookie: { secure: false }, //Needs to be false, this works only with https
  })
);
app.use(baseLimiter); //Gælder alle sidder, en slags dos attack prevention
app.use("/auth", authLimiter); //Gælder kun routes der starter med auth

/*********/
/*Routers*/
/*********/

app.use(authRouter);
app.use(mailRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
