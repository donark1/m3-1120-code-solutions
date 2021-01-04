select "c"."name" as "country",
        count("cities"."name") as "numberOfCitiesPerCountries"
  from "countries" as "c"
  join "cities" using ("countryId")
  group by "c"."name";
