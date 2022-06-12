/* COMMENTS TABLE */

CREATE TABLE comments(
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  poster VARCHAR,
  comment VARCHAR,
  date BIGINT
);

CREATE INDEX posterIndex ON comments (poster);
CREATE INDEX commentIndex ON comments (comment);
CREATE INDEX dateIndex ON comments (date);

SELECT setval('comments_id_seq', max(id)) FROM comments;

CREATE TABLE visitors(
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  ip-addr VARCHAR,
  date BIGINT
);

CREATE INDEX ipIndex ON visitors (ip-addr);
CREATE INDEX dateIndex ON visitors (date);

SELECT setval('visitors_id_seq', max(id)) FROM visitors;