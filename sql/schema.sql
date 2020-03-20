CREATE TABLE IF NOT EXISTS topics (
    id SERIAL PRIMARY KEY,
    title VARCHAR(125) NOT NULL,
    description VARCHAR(125),
    timetomaster INTEGER, 
    timespent INTEGER,
    source VARCHAR(125), 
    startdate DATE, 
    inprogress BOOLEAN, 
    completiondate DATE
);