import db from "./createSchemas.js";

const isInDeleteMode = true;

if (isInDeleteMode) {
  db.exec("DROP TABLE IF EXISTS vinhandeldk;");
}

db.exec(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) 
);`);

// Seed
if (isInDeleteMode) {
  db.run(`INSERT INTO players(name) VALUES ('Messi')`);
  db.run(`INSERT INTO players(name) VALUES ('Messi')`);
}

db.close();
