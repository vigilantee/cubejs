const axios = require("axios");
var FRAPPE_HOST = require("./config");

async function get_cubejs_data() {
  const resp = await axios.post(
    `${FRAPPE_HOST}/api/method/bloomstack_core.bloomstack_core.page.admin_insights.admin_insights.get_cubejs_host`
  );
  return resp.data;
}

function set_cubejs_env(data) {
  process.env.CUBEJS_DB_HOST=data.cubejs_db_host;
  process.env.CUBEJS_DB_NAME=data.cubejs_db_name;
  process.env.CUBEJS_DB_USER=data.cubejs_db_user;
  process.env.CUBEJS_DB_PASS=data.cubejs_db_password;
  process.env.CUBEJS_WEB_SOCKETS=data.cubejs_web_sockets;
  process.env.CUBEJS_DB_TYPE=data.cubejs_db_type;
  process.env.CUBEJS_API_SECRET=data.cube_js_secret;
}
const cubejs_data = get_cubejs_data();
cubejs_data.then(({message:data}) => {
  set_cubejs_env(data);
  require("dotenv").config();
  const express = require("express");
  const bodyParser = require("body-parser");
  const CubejsServerCore = require("@cubejs-backend/server-core");

  const app = express();
  app.use(require("cors")());
  app.use(bodyParser.json({ limit: "50mb" }));

  app.get("/api/restart", (req, res) => {
    const { exec } = require("child_process");
    exec("yarn kill && yarn dev", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
    res.json({ status: "ok" });
  });

  const serverCore = CubejsServerCore.create();
  serverCore.initApp(app);

  const port = process.env.PORT || 4000;
  var server = app.listen(port, (err) => {
    if (err) {
      console.error("Fatal error during server start: ");
      console.error(e.stack || e);
    }
    console.log(`🚀 Cube.js server is listening on ${port}`);
  });
});