import sequelize from "./src/config/db.js";
import dotenv from "dotenv";
import httpServer from "./src/config/http.js";

async function bootstrap() {
  dotenv.config();
  await sequelize.sync({ force: true });
  httpServer.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  });
}
bootstrap();
