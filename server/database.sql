CREATE TABLE "tasks" (
  "id" serial primary key,
  "task" integer,
  "completed" true,
  "delete" true,
);

INSERT INTO "tasks" 
	("id ", "artist", "track", "published") 
VALUES