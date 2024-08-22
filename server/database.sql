CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "todo" VARCHAR(80),
  "completed" BOOLEAN,
);

INSERT INTO "tasks" 
	("todo", "completed")
VALUES ('vacuum', 'true');

DROP TABLE "treats";
