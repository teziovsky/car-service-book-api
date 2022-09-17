import Card from "components/Elements/Card/Card";
import React, { useEffect } from "react";
import carService from "services/carService";

const AppIndex = () => {
  const { data: carsList, isLoading, errorMsg, execute: getCars } = carService.getCars();

  useEffect(() => {
    getCars();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (!carsList.length) {
    return <p>Brak samochodów.</p>;
  }

  return (
    <>
      {carsList.map((car) => (
        <Card key={car.id}>
          <Card.Header>
            <div className="card-heading">
              {car.brand} {car.model} {car.generation}
            </div>
          </Card.Header>
          <Card.Body>
            {car.type && <p>Nadwozie: {car.type}</p>}
            {car.productionYear && <p>Produkcja: {car.productionYear}</p>}
            {car.engineType && <p>Typ silnika: {car.engineType}</p>}
            {car.engineCapacity && <p>Pojemność silnika: {car.engineCapacity}</p>}
            {car.enginePower && <p>Moc: {car.enginePower}</p>}
            {car.gearboxType && <p>Skrzynia biegów: {car.gearboxType}</p>}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AppIndex;
