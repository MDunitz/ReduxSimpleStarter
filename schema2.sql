DROP TABLE IF EXISTS prints CASCADE;

CREATE TABLE prints(
  id SERIAL PRIMARY KEY,
  print_data VARCHAR (1000),
  print_info VARCHAR (1000),
  user_info VARCHAR (1000)
);


  -- email VARCHAR(250) UNIQUE,
  -- serialNumber INTEGER UNIQUE,
  -- inputFile VARCHAR(250),
  -- --TODO should input and output files be unique?
  -- outputFile VARCHAR(250),
  -- extruder1 Integer,
  -- extruder2 Integer,
  -- clEnabled boolean,
  -- clDuration Integer,
  -- clIntensity Integer,
  -- layerNum INTEGER,
  -- layerHeight Integer,
  -- wellplateType INTEGER,
  -- livePercent INTEGER,
  -- elasticity Integer,
  -- deadPercent Integer