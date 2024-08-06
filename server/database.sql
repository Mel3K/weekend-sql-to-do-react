CREATE TABLE "task" (
  "id" serial primary key,
  "task" integer,
  "completed" true,
  "delete" true,
);

INSERT INTO "task" 
	("task", "completed")
VALUES ('vacuum', 'true');
