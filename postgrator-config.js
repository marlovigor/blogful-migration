require('dotenv').config();
console.log(process.env.DB_URL)

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": process.env.DB_URL,
}