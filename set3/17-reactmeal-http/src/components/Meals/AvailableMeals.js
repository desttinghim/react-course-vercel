import { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const mealRequest = useHttp();
  const [mealsList, setMealsList] = useState([]);

  const sendMealRequest = mealRequest.sendRequest;

  useEffect(() => {
    const transformMeals = (data) => {
      let loadedData = [];
      for (const key in data) {
        loadedData.push(
          <MealItem
            key={key}
            id={key}
            name={data[key].name}
            description={data[key].description}
            price={data[key].price}
          />
        );
      }
      setMealsList(loadedData);
    };
    sendMealRequest(
      {
        url: "https://react-http-3d4aa-default-rtdb.firebaseio.com/meals.json",
      },
      transformMeals
    );
  }, [sendMealRequest]);

  return (
    <section className={classes.meals}>
      <Card>
        {!mealRequest.error && !mealRequest.isLoading && <ul>{mealsList}</ul>}
        {mealRequest.isLoading && (
          <p className={classes["meals-loading"]}>Loading...</p>
        )}
        {mealRequest.error && (
          <p className={classes["meals-error"]}>{mealRequest.error}</p>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
