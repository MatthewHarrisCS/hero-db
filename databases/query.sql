WITH two_directors(name, title, release_date) 
    AS (SELECT (a.first_name || ' ' || a.last_name || ' & ' || b.first_name || ' ' || b.last_name), a.title, a.release_date
    FROM movie_director AS a JOIN movie_director AS b 
    WHERE a.title = b.title
        AND a.release_date = b.release_date
        AND (a.first_name != b.first_name OR a.last_name != b.last_name)
    GROUP BY a.title, a.release_date),
one_director(name, title, release_date)
    AS (SELECT (first_name || ' ' || last_name), title, release_date
    FROM movie_director)

SELECT * FROM 
    (SELECT * FROM one_director 
    WHERE (title, release_date) 
        NOT IN (SELECT title, release_date FROM two_directors)
    UNION 
    SELECT * FROM two_directors) ORDER BY release_date;

WITH two_directors(name, title, episode, release_date) 
    AS (SELECT (a.first_name || ' ' || a.last_name || ' & ' || b.first_name || ' ' || b.last_name), 
        a.title, (a.season || '0' || a.episode_no), a.release_date
    FROM episode_director AS a JOIN episode_director AS b 
    WHERE a.title = b.title
        AND a.release_date = b.release_date
        AND a.season = b.season
        AND a.episode_no = b.episode_no
        AND (a.first_name != b.first_name OR a.last_name != b.last_name)
    GROUP BY a.title, a.release_date, a.season, a.episode_no),
one_director(name, title, episode, release_date)
    AS (SELECT (first_name || ' ' || last_name), title, (season || '0' || episode_no), release_date
    FROM episode_director)

SELECT * FROM 
    (SELECT * FROM one_director 
    WHERE (title, release_date, episode) 
        NOT IN (SELECT title, release_date, episode FROM two_directors)
    UNION 
    SELECT * FROM two_directors) ORDER BY title, episode;