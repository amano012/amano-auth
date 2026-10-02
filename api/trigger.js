export default function handler(req, res) {
  const authKey = req.query.auth_key || "unknown";
  const serverIP = req.query.server_ip || "unknown";
  const clientIP = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  const time = new Date().toISOString();

  const logLine = `[${time}] key=${authKey} server=${serverIP} client=${clientIP}`;
  console.log(logLine);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send("ok");
}
