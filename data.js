import express from "express";
import mysql from "mysql";

// const http = require("http");
//const mysql = require('mysql'):
// Use these variables to define our port, hostname
// const hostname = "127.0.0.1";
// const port = 3003;

const app = express();

app.use(express.json());
app.use(cors());

//start of mysql Code
//this grants access to the methods of mysql
// const mysql = require("mysql");
//creates the details of your connection to your mysql database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "rootpractice",
  password: "practice20020210",
  database: "STTCProducts",
});

// This connects to the database
// if there is an arror it will catch it
//we probbaly should return the eror message so that we know what
//error is and can troubleshoot it
db.connect((err) => {
  if (err) {
    console.log(`can't connect to database`);
    return;
  }
  console.log(`connection worked`);
});

app.listen(3003, () => {
  console.log("Connected to backend!");
});

app.get("/", (_req, res) => {
  res.json("Welcome to STTC Backend");
});

app.get("/checkout", (_req, res) => {
  const ss = "SELECT * FROM Tees";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    console.log(data);
    res.send(data);
  });
});

app.get("/tees", (_req, res) => {
  const ss = "SELECT * FROM Tees";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoetest", (_req, res) => {
  const ss = "SELECT * FROM Shoes";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoes", (_req, res) => {
  const ss = "SELECT * FROM Shoes";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/collectibles", (_req, res) => {
  const dbParams = [];
  const filter = _req.params.filter;
  let ss = "SELECT * FROM Collectibles ";
  if (filter) {
    ss += "where TYPE = ? ";
    dbParams.push(filter);
  }
  db.query(ss, dbParams, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/collectiblesfilterPricelow", (_req, res) => {
  const ss = "SELECT * FROM Collectibles ORDER By Price Desc";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/collectiblesfilterPricehigh", (_req, res) => {
  const ss = "SELECT * FROM Collectibles ORDER By Price";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/collectiblesfilterFunko", (_req, res) => {
  const ss = "SELECT * FROM Collectibles where TYPE = 'FUNKO'";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/collectiblesfilterPlush", (_req, res) => {
  const ss = "SELECT * FROM Collectibles where TYPE = 'Plush'";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

// app.get("/fitteds", (_req, res) => {
//   const dbParams = [];
//   const filter = _req.params.filter;
//   let ss = "SELECT * FROM Fitteds ";
//   if (filter) {
//     ss += "where TYPE = ? ";
//     dbParams.push(filter);
//   }
//   db.query(ss, dbParams, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });

app.get("/fitteds", (_req, res) => {
  const ss = "SELECT * FROM Fitteds";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/fittedsfilterPricelow", (_req, res) => {
  const ss = "SELECT * FROM Fitteds ORDER By Price Desc";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/fittedsfilterPricehigh", (_req, res) => {
  const ss = "SELECT * FROM Fitteds ORDER By Price";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/fittedsfilterBaseball", (_req, res) => {
  const ss = "SELECT * FROM Fitteds where FittedsID in (1,3,4) ";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/fittedsfilterNFL", (_req, res) => {
  const ss = "SELECT * FROM Fitteds where FittedsID in (2)";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

// Tops filter

app.get("/tops", (_req, res) => {
  const ss = "SELECT * FROM Tees";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/topsfilterPricelow", (_req, res) => {
  const ss = "SELECT * FROM Tees ORDER By Price Desc";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/topsfilterPricehigh", (_req, res) => {
  const ss = "SELECT * FROM Tees ORDER By Price";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/topsfilterTees", (_req, res) => {
  const ss = "SELECT * FROM Tees where TeesID in (1,2)";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/topsfilterJackets", (_req, res) => {
  const ss = "SELECT * FROM Tees where TeesID in (3,4) ";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

// Shoes filter

app.get("/shoes", (_req, res) => {
  const ss = "SELECT * FROM Shoes";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoesfilterPricelow", (_req, res) => {
  const ss = "SELECT * FROM Shoes ORDER By Price Desc";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoesfilterPricehigh", (_req, res) => {
  const ss = "SELECT * FROM Shoes ORDER By Price";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoesfilterJordans", (_req, res) => {
  const ss = "SELECT * FROM Shoes where ShoesID in (1,2)";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoesfilterNike", (_req, res) => {
  const ss = "SELECT * FROM Shoes where ShoesID in (3) ";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

app.get("/shoesfilterNewbalance", (_req, res) => {
  const ss = "SELECT * FROM Shoes where ShoesID in (4) ";
  db.query(ss, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

//make a call to our database with select

// db.query("SELECT * FROM Tees", (err, row) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(row);
//   }
// });

// db.query("SELECT * FROM Shoes", (err, row) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(row);
//   }
// });

// db.query("SELECT * FROM Fitteds", (err, row) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(row);
//   }
// });

// db.query("SELECT * FROM Collectibles", (err, row) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(row);
//   }
// });
//makes sure mysql.queries or current actions are complete before closing
// db.end((err) => {});
//end

// const server = http.createServer((req, res) => {
//   res.staticCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// import express from "express";
// import mysql from "mysql";
// import cors from "cors";

// const app = express();

// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "rootpractice",
//   password: "practice20020210",
//   database: "STTCProducts",
// });

// app.get("/", (_req, res) => {
//   res.json("hello");
// });

// app.get("/tees", (_req, res) => {
//   const q = "SELECT * FROM Tees";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });

// app.get("/fitted", (_req, res) => {
//   const q = "SELECT * FROM Shoes";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });

// app.get("/shoes", (_req, res) => {
//   const q = "SELECT * FROM Fitteds";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });

// app.get("/collectibles", (_req, res) => {
//   const q = "SELECT * FROM Collectibles";
//   db.query(q, (err, data) => {
//     if (err) console.log(err);
//     res.send(data);
//   });
// });

// app.listen(3003, () => {
//   console.log("Connected to backend!");
// });
