const express = require('express')
const app = express()

const useragent = require('useragent')

app.get("/", function (req, res) {
  const h = req.headers
  const ip = h['x-forwarded-for'].split(',')[0]
  const lang = h['accept-language'].split(',')[0]
  const agent = useragent.parse(req.headers['user-agent'])
  const os = agent.os.toString()
  res.json({ip, lang, os, agent: agent.toString()})
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
