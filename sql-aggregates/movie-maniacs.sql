select "firstName", "lastName",
      sum("payments"."amount") as "amount"
      from "customers"
      join "payments" using ("customerId")
      group by "customerId"
      order by "amount" desc;
