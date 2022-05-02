import React, { ReactElement } from "react";
import State from "../../components/monitor/State";
import { StateParams } from "../../types/types";
import { useParams } from "react-router-dom";

const States: React.FC = (): ReactElement => {
  const { state:name } = useParams<StateParams>();
  return(
    <State state={name}/>
   )
};

export default States;
