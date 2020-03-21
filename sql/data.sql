DELETE FROM topics;
ALTER SEQUENCE topics_id_seq RESTART;

INSERT INTO topics(title, description, timetomaster, timespent, source, startdate, inprogress, completiondate)
VALUES
    ('Scrum', 'Scrum master studies', '20', '20', 'scrum.org', '2020-02-01', 'FALSE', '2020-02-09')
;