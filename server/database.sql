CREATE TABLE "task" (
  "id" serial primary key,
  "task" varchar,
  "completed" true,
);

INSERT INTO "task" 
	("task", "completed")
VALUES ('vacuum', 'true');
