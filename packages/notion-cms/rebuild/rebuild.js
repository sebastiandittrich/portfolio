const fetch = require("node-fetch");

exports.main = async () => {
  const appId = process.env.APP_ID;
  const apiKey = process.env.API_KEY;
  await fetch(`https://api.digitalocean.com/v2/apps/${appId}/deployments`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: '{"force_build": true}',
  });
  return { body: "Done." };
};
