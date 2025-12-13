import Image from "next/image";
import React from "react";

const Card = ({ imgUrl, cardBody, title }) => {
  return (
    <div className="card card-side bg-prime-color shadow-xl hover:scale-110 duration-200">
      <div>
        <Image
          src={imgUrl}
          width={600}
          height={200}
          alt="Contact"
          className="rounded-t-2xl"
        />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{cardBody}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
