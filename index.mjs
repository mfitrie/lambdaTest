import { v4 } from "uuid";

export const handler = async (event) => {

  const uuid = v4();

  const response = {
    body: uuid,
    // body: JSON.stringify('Hello from Lambda!'),
  };
  
  return response;
};
  