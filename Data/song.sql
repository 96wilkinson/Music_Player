CREATE TABLE Songs 
(ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
Title VARCHAR(255) NOT NULL,
Artist VARCHAR(255) NOT NULL,
Time INT(11) NOT NULL);

INSERT INTO Songs (Title,Artist,Time) VALUES
    ("shotgun", "George Ezra", 201),
    ("snakey jazz", "various snakes", 326),
    ("Watts", "Kanye East", 15),
    ("Elctronic funk'o'pop","wolly punk", 54),
    ("red left hand", "Nick Cage", 514)