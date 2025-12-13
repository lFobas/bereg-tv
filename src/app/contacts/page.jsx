import Card from "@/components/Card";
import React from "react";

const page = () => {
  return (
    <>
      <a href="tel:+380952482009" className="flex justify-end m-10">
        <Card
          title="Телефон"
          imgUrl="/img/Contact.png"
          cardBody="+380 95 248 20 09"
        />
      </a>

      <div className="flex justify-start m-10">
        <Card
          title={"Наша Адреса"}
          imgUrl={"/img/map.png"}
          cardBody={"м.Берегове пл.Кошута 5"}
        />
      </div>
      <div className="flex justify-end m-10">
        <Card
          title={"Реквізити"}
          imgUrl={"/img/iban.jpg"}
          cardBody={"ЄДРПОУ 45654366 \n UA703052990000026006033615351"}
        />
      </div>
    </>
  );
};

export default page;
