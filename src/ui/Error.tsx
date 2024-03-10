import React from "react";

const Error = ({ message }: { message: string }) => {
  return (
    <div className="border-2 border-red-500 p-10">
      <p className="text-red-500">{message}</p>
    </div>
  );
};

export default Error;
