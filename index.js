const express = require("express");
const axios = require("axios");
const util = require("util");

const app = express();

app.get("/", (req, res) => {
  const { originalUrl, query } = req;
  res.json({ originalUrl, query });
});

app.get("/axios", async (req, res) => {
  const { data } = await axios.get("http://localhost:3333", {
    params: {
      id: 1,
      pessoas: [1, 2, 3],
    },
  });

  console.log(JSON.stringify({ data }, null, 2));
  res.send(data);
});

app.listen(3333);
