
INSERT INTO organizer (id_user,biography,main_link,picture) values (1,'De nacionalidad namecusein, empezó su carrera en la banda Los GOKU ... zaraza!!!','http://www.gokudj.com','http://www.gokudj.com/avatar.jpg');
INSERT INTO organizer (id_user,biography,picture) values (2,'De nacionalidad namecusein, empezó su carrera en la banda Los GOKU ... zaraza!!!','http://www.gokudj.com/avatar.jpg');
INSERT INTO organizer (id_user,biography,main_link) values (3,'De nacionalidad namecusein, empezó su carrera en la banda Los GOKU ... zaraza!!!','http://www.gokudj.com');
INSERT INTO organizer (id_user,biography) values (4,'De nacionalidad namecusein, empezó su carrera en la banda Los GOKU ... zaraza!!!'); 

INSERT INTO organizer (id_user) values (6); # Biola restricción de campo biography no null
INSERT INTO organizer (id_user,biography,main_link,picture) values (1,'test de inserción','http://www.gokudj.com','http://www.gokudj.com/avatar.jpg'); #Biola restricción id_user única