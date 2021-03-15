CREATE TABLE 'album' (
  'ID' int unsigned NOT NULL,
  'Title' varchar(255) NOT NULL,
  'Artist' varchar(255) NOT NULL,
  'Time' int NOT NULL,
  'Number' int NOT NULL,
  'Album' varchar(255) NOT NULL,
  PRIMARY KEY ('ID'),
  UNIQUE KEY 'ID_UNIQUE' ('ID')
)