CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "task" VARCHAR(80),
  "completed" BOOLEAN,
);

INSERT INTO "tasks" 
	("task", "completed")
VALUES ('vacuum', 'true');

DROP TABLE "treats";
