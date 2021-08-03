import React from "react";

const Header = () => {
  return (
    <div className="p-7 m-3 w-3/4 bg-green-200 mx-auto rounded-sm shadow-md opacity-90">
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-2xl text-blue-900">Helper Skelper</h1>
      </div>
      <div className="flex flex-row justify-center">
        <p className="italic font-light text-gray-500">
          You're not usesless, you're just unorganized
        </p>
      </div>
    </div>
  );
};

export default Header;
