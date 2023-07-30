// import { v4 } from "uuid";

export const handler = async (event) => {

  // const uuid = v4();
  console.log("Event: ", event);

  const response = {
    body: "starred received",
    // body: JSON.stringify('Hello from Lambda!'),
  };
  
  return response;
};
  