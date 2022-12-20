console.clear();
import sequelize from "./src/config/db.js";
import dotenv from "dotenv";
import httpServer from "./src/config/http.js";
import APIconnection from "./src/helpers/APIconnection.js";

dotenv.config();

async function bootstrap() {
  await sequelize.sync({ force: true });
  //await APIconnection();
  httpServer.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  });
}
bootstrap();
