DROP TABLE IF EXISTS plays;
DROP TABLE IF EXISTS character_power;
DROP TABLE IF EXISTS character;
DROP TABLE IF EXISTS episode_director;
DROP TABLE IF EXISTS movie_director;
DROP TABLE IF EXISTS episode;
DROP TABLE IF EXISTS show;
DROP TABLE IF EXISTS movie;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS actor;
DROP TABLE IF EXISTS director;
DROP TABLE IF EXISTS crew;

CREATE TABLE crew (
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    dob DATE,
    gender CHAR(1) CHECK (gender in ('M','F','X')),
    PRIMARY KEY (first_name, last_name)
);

CREATE TABLE director (
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    PRIMARY KEY (first_name, last_name),
    FOREIGN KEY (first_name) REFERENCES crew (first_name),
    FOREIGN KEY (last_name) REFERENCES crew (last_name)
);

CREATE TABLE actor (
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    PRIMARY KEY (first_name, last_name),
    FOREIGN KEY (first_name) REFERENCES crew (first_name),
    FOREIGN KEY (last_name) REFERENCES crew (last_name)
);
    
CREATE TABLE project (
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    studio VARCHAR(16),
    series VARCHAR(16),
    PRIMARY KEY (title, release_date)
);

CREATE TABLE movie (
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    PRIMARY KEY (title, release_date),
    FOREIGN KEY (title) REFERENCES project (title),
    FOREIGN KEY (release_date) REFERENCES project (release_date)
);

CREATE TABLE show (
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    PRIMARY KEY (title, release_date),
    FOREIGN KEY (title) REFERENCES project (title),
    FOREIGN KEY (release_date) REFERENCES project (release_date)
);

CREATE TABLE episode (
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    season INT NOT NULL,
    episode_no INT NOT NULL,
    episode_title VARCHAR(64) NOT NULL,
    PRIMARY KEY (title, release_date, season, episode_no),
    FOREIGN KEY (title) REFERENCES show (title),
    FOREIGN KEY (release_date) REFERENCES show (release_date)
);

CREATE TABLE movie_director (
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    PRIMARY KEY (first_name, last_name, title, release_date),
    FOREIGN KEY (first_name) REFERENCES director (first_name),
    FOREIGN KEY (last_name) REFERENCES director (last_name),
    FOREIGN KEY (title) REFERENCES movie (title),
    FOREIGN KEY (release_date) REFERENCES movie (release_date)
);

CREATE TABLE episode_director (
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    season INT NOT NULL,
    episode_no INT NOT NULL,
    PRIMARY KEY (first_name, last_name, title, release_date, season, episode_no),
    FOREIGN KEY (first_name) REFERENCES director (first_name),
    FOREIGN KEY (last_name) REFERENCES director (last_name),
    FOREIGN KEY (title) REFERENCES episode (title),
    FOREIGN KEY (release_date) REFERENCES episode (release_date),
    FOREIGN KEY (season) REFERENCES episode (season),
    FOREIGN KEY (episode_no) REFERENCES episode (episode_no)
);

CREATE TABLE character (
    identity VARCHAR(32) NOT NULL,
    hero_name VARCHAR(32),
    PRIMARY KEY (identity)
);

CREATE TABLE character_power (
    identity VARCHAR(32) NOT NULL,
    power VARCHAR(32) NOT NULL,
    PRIMARY KEY (identity, power),
    FOREIGN KEY (identity) REFERENCES character (identity)
);

CREATE TABLE plays (
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    identity VARCHAR(32) NOT NULL,
    title VARCHAR(64) NOT NULL,
    release_date DATE NOT NULL,
    PRIMARY KEY (first_name, last_name, identity, title, release_date),
    FOREIGN KEY (first_name) REFERENCES actor (first_name),
    FOREIGN KEY (last_name) REFERENCES actor (last_name),
    FOREIGN KEY (identity) REFERENCES character (identity),
    FOREIGN KEY (title) REFERENCES project (title),
    FOREIGN KEY (release_date) REFERENCES project (release_date)
);