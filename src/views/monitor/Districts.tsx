import React, { ReactElement } from "react";
import District from "../../components/monitor/District";
import { DistrictProps } from "../../types/types";
import { useParams } from "react-router-dom";

const Districts: React.FC = (): ReactElement => {
  const { district:name } = useParams<DistrictProps>();

  return <District district={name} />
};

export default Districts;
