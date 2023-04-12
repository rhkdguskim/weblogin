const dropQuery = `
    DROP TABLE IF EXISTS person
`;

const insertQuery = `
  CREATE TABLE IF NOT EXISTS person(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(20),
    user_password VARCHAR(20)
  )
`;

const dummyDataQuery = `
  insert into person(user_name, user_password) values ('doraemong', 'daenamuhelicopter'),
    ('kukaro', 'wordpass'),
    ('jiharu', 'password')
`;