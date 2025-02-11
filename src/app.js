import express from "express";
import { connectMongoDB } from "./config/mongoDb.config.js";
import envs from "./config/envs.config.js";
import router from "./router/index.router.js";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";
import cookieParser from "cookie-parser";

const app = express();
// Conexión con mongo
connectMongoDB();

app.use(express.json()); // Este middleware nos permite obtener archivos json
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.use("/api", router);

const PORT = envs.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${envs.PORT}`);
});
