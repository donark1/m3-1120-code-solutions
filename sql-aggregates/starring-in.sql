select "categories"."name" as "category",
        count("actorId")
    from "actors"
    join "castMembers" using ("actorId")
    join "filmCategory" using ("filmId")
    join "categories" using ("categoryId")
    where "firstName" ='Lisa'
    and "lastName" = 'Monroe'
    group by "category";
