CREATE TABLE IF NOT EXISTS topics (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(125),
    description VARCHAR(125),
    timetomaster INTEGER, 
    timespent INTEGER,
    source VARCHAR(125), 
    startdate DATE, 
    inprogress BOOLEAN, 
    completiondate DATE
);