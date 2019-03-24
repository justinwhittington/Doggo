DROP DATABASE IF EXISTS doggoDB;
CREATE DATABASE doggoDB;
USE doggoDB;

CREATE TABLE atest (
    id INT NOT NULL AUTO_INCREMENT,
    Goal VARCHAR(255),
    DaysCompleted VARCHAR(255) NULL,
    primary key(id)
);

