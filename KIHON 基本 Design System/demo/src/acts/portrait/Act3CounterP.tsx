// Act 3 Portrait — Counter: reuses landscape Act3Counter with portrait+kuro props.

import React from "react";
import { Act3Counter } from "../Act3Counter";
export { ACT3_FRAMES } from "../Act3Counter";

export const Act3CounterP: React.FC = () => (
  <Act3Counter format="portrait" theme="kuro" />
);
