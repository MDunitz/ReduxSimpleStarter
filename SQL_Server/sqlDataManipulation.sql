
CREATE TABLE json_raw                                                 (                                                                               
ROW_ID SERIAL PRIMARY KEY,
DATA text                                                                      
);

COPY json_raw(DATA)                                                   
FROM '/Users/Madison/Desktop/jobApps/codingChallenges/bioBot/ReduxSimpleStarter/SQL_Server/biobotsData/bioprintData2.json'                                       
DELIMITERS '#' CSV;





CREATE TABLE printerData(                                                                               
ROW_ID INT,
printdata_deadpercent INT,                                                      
printdata_elasticity INT,                                                             
printdata_livepercent INT,
print_crosslinking_duration INT,                                                    
print_crosslinking_enabled BOOLEAN,                                                                              
print_crosslinking_intensity INT,                                                                
print_file_input VARCHAR(250),                                                  
print_file_output VARCHAR(250),                                                 
print_pressure_extruder1 INT,                                                   
print_pressure_extruder2 INT,
print_resolution_layerHeight INT,                                              
print_resolution_layerNum INT,                                                                             
print_welltype INT,
user_email VARCHAR(25),                                                         
user_serial INT                                                       
);

INSERT INTO printerDATA
SELECT
row_id,
cast(cast(DATA::json->'print_data'->'deadPercent' AS TEXT) AS NUMERIC) AS printdata_deadpercent,
cast(cast(DATA::json->'print_data'->'elasticity' AS TEXT) AS NUMERIC) AS printdata_elasticity,
cast(cast(DATA::json->'print_data'->'livePercent' AS TEXT) AS NUMERIC) AS printdata_livepercent,
cast(cast(DATA::json->'print_info'->'crosslinking'->'cl_duration' AS TEXT) AS NUMERIC) AS print_crosslinking_duration,
cast(DATA::json->'print_info'->'crosslinking'->'cl_enabled' AS BOOLEAN) AS print_crosslinking_enabled,
cast(cast(DATA::json->'print_info'->'crosslinking'->'cl_intensity' AS TEXT) AS NUMERIC) AS print_crosslinking_intensity,
DATA::json->'print_info'->'files'->'input' AS print_file_input,
DATA::json->'print_info'->'files'->'output' AS print_file_output,
cast(cast(DATA::json->'print_info'->'pressure'->'extruder1' AS TEXT) AS NUMERIC) AS print_pressure_extruder1,
cast(cast(DATA::json->'print_info'->'pressure'->'extruder2' AS TEXT) AS NUMERIC) AS print_pressure_extruder2,
cast(cast(DATA::json->'print_info'->'resolution'->'layerHeight' AS TEXT) AS NUMERIC) AS print_resolution_layerHeight,
cast(cast(DATA::json->'print_info'->'resolution'->'layerNum' AS TEXT) AS NUMERIC) AS print_resolution_layerNum,
cast(cast(DATA::json->'print_info'->'wellplate' AS TEXT) AS NUMERIC) AS print_welltype,
DATA::json->'user_info'->'email' AS user_email,
cast(cast(DATA::json->'user_info'->'serial' AS TEXT) AS NUMERIC) AS user_serial  
FROM json_raw;
