import { useState } from "react";

export default function CustomHooks(receiveData: any) {
  const [data, setData] = useState(receiveData);
  return [data, setData];
}
