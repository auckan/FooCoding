use new_world;

-- 1. What are the names of countries with population greater than 8 million
select name, population from country where population > 8000000;

-- 2. What are the names of countries that have “land” in their names ?
select name from country where country.name like '%land%';

-- 3. What are the names of the cities with population in between 500,000 and 1 million ?
select name, population from country where population between 500000 and 1000000;

-- 4. What's the name of all the countries on the continent ‘Europe’ ?
select name, continent from country where continent = 'Europe';

-- 5. List all the countries in the descending order of their surface areas.
select name, surfacearea from country order by surfacearea desc;

-- 6. What are the names of all the cities in the Netherlands?
select city.name, country.name from city inner join country on city.countrycode = country.code where country.name = 'Netherlands';

-- 7. What is the population of Rotterdam ?
select name, population from city where name = 'Rotterdam';

-- 8. What's the top 10 countries by Surface Area ?
select name, surfacearea from country order by surfacearea desc limit 10;

-- 9. What's the top 10 most populated cities?
select name, population from city order by population desc limit 10;

-- 10. What is the population of the world ?
select sum(population) as worldpopulation from country;

-- EXTRA TASK === give me the names of the countries that has more than 10 cities, and a total population of the cities listed (not the country population) of more than 50 million

SELECT country.Name FROM country INNER JOIN city ON country.Code = city.CountryCode GROUP BY CountryCode HAVING COUNT(*) > 10 AND SUM(city.Population) > 50000000;
