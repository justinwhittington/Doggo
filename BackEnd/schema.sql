-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS doggoDB;
-- Creates the "favorite_db" database --
CREATE DATABASE doggoDB;
USE doggoDB;

CREATE TABLE `users` (
id INTEGER AUTO_INCREMENT,
username VARCHAR(50),
pass VARCHAR(50),
PRIMARY KEY(id)
);
