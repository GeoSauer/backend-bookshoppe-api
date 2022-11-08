-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS author_books;

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released INT NOT NULL
);

CREATE TABLE author_books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO authors (
    name 
)
VALUES
('Cherie Priest'),
('K. B. Wagers'),
('Alethea Faust')
;

INSERT INTO books (
    title,
    released
)
VALUES
('The Inexplicables', 2012),
('Boneshaker', 2009),
('Ganymede', 2011),
('Dreadnought', 2012),
('Fiddlehead', 2013),
('Behind the Throne', 2016),
('A Pale Light in the Black', 2020),
('Beyond the Emppire', 2017),
('Down Among the Dead', 2019),
('There Before the Chaos', 2018),
('Initiation', 2021),
('Mastery', 2022),
('Championship', 2023)
;

INSERT INTO author_books (
    author_id,
    book_id
)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(2,6),
(2,7),
(2,8),
(2,9),
(2,10),
(3,11),
(3,12),
(3,13)
;
