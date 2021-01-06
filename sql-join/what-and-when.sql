select "f"."releaseYear", "c"."name", "f"."title"
  from "filmCategory"
  join "films" as "f" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "f"."title" = 'Boogie Amelie';
