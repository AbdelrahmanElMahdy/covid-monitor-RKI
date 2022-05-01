import React, { ReactElement } from "react";

const Country: React.FC = (): ReactElement => {
  return (
    <div>
      Germany statistics
      <img
        src="https://api.corona-zahlen.org/map/states/hospitalization"
        alt=""
      />
    </div>
  );
};

export default Country;
