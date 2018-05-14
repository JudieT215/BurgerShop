###
Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers_tb
(
    id int NOT NULL
    AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);