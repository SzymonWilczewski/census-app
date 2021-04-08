import { createConnection } from "typeorm";
import server from "./server";

createConnection()
  .then(() => {
    const port = process.env.PORT || 3000;
    server.listen(port, () =>
      console.log(`server's listening on port ${port}`)
    );
  })
  .catch((error) => console.log(error.message));
