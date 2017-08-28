\connect todos_db_dev;

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  category VARCHAR(255),
  description TEXT,
  status VARCHAR(255)
);
