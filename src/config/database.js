require("dotenv").config();

const database = {
  staging: {
    env: "staging",
    host: "remotemysql.com",
    username: "MouzOgefOT",
    password: "bUe23NQSTx",
    database: "MouzOgefOT",
    dialect: "mysql",
    options: {
      host: "remotemysql.com",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
  },

  production: {
    env: "production",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "mysql",
    options: {
      host: process.env.DB_HOST,
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
  },
};

module.exports = database[process.env.NODE_ENV || "staging"];
