const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// فعال‌کردن CORS برای همه‌ی IPها (اجباری برای Vercel/Render)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// استفاده از پورت داینامیک Render
const PORT = process.env.PORT || 3000
server.use(router)
server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ JSON Server is running on port ${PORT}`)
})
