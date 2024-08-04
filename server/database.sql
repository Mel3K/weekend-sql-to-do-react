CREATE TABLE "Task" (
  "id" serial primary key,
  "" integer,
  "artist" varchar(80) not null,
  "track" varchar(120) not null,
  "published" date
);

INSERT INTO "songs" 
	("rank", "artist", "track", "published") 
VALUES