-- DELETE DB
DROP DATABASE IF EXISTS tracker_db;

-- CREATE DB
CREATE DATABASE tracker_db;

-- SELECT DB
USE tracker_db;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);