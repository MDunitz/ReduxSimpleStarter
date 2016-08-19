DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(250) UNIQUE,
serialNumber INTEGER
);

DROP TABLE IF EXISTS printInfo CASCADE;

CREATE TABLE printInfo (
  id serial PRIMARY KEY,
  inputFile VARCHAR(250),
  --TODO should input and output files be unique?
  outputFile VARCHAR(250),
  userID INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(userID) REFERENCES users(id)
);

DROP TABLE IF EXISTS pressure;

CREATE TABLE pressure (
  id serial PRIMARY KEY,
  extruder1 Integer,
  extruder2 Integer,
  printID Integer NULL DEFAULT NULL,
  FOREIGN KEY (printID) REFERENCES printInfo(id)
);

DROP TABLE IF EXISTS crosslinking;

CREATE TABLE crosslinking (
  id serial PRIMARY KEY,
  clEnabled boolean,
  clDuration Integer,
  clIntensity Integer,
  printID Integer NULL DEFAULT NULL,
  FOREIGN KEY (printID) REFERENCES printInfo(id)
);

DROP TABLE IF EXISTS resolution;

CREATE TABLE resolution(
  id serial PRIMARY KEY,
  layerNum INTEGER,
  layerHeight Integer,
  printID Integer NULL DEFAULT NULL,
  FOREIGN KEY (printID) REFERENCES printInfo(id)
);

DROP TABLE IF EXISTS wellplate;

CREATE TABLE wellplate(
  id serial PRIMARY KEY,
  type INTEGER,
  printID Integer NULL DEFAULT NULL,
  FOREIGN KEY (printID) REFERENCES printInfo(id)
);

DROP TABLE IF EXISTS printData;

CREATE TABLE printData(
  id serial PRIMARY KEY,
  livePercent INTEGER,
  elasticity Integer,
  deadPercent Integer,
  printID Integer NULL DEFAULT NULL,
  FOREIGN KEY (printID) REFERENCES printInfo(id)
);