import React, { FC } from "react";
import HappyIncrementor from "./components/HappyIncrementor";
import SadIncrementor from "./components/SadIncrementor";
import HappyTracker from "./components/HappyTracker";
import SadTrcker from "./components/SadTrcker";
import ClearAll from "./components/ClearAll";

const App: FC = () => {
  return (
    <div className="bg-gray-500 p-10 m-10 flex flex-col justify-start gap-4 items-start w-fit rounded-lg">
      <HappyTracker />
      <SadTrcker />
      <div className="flex flex-row justify-evenly gap-8 w-full items-center ">
        <div>
          <HappyIncrementor />
          <SadIncrementor />
        </div>
        <ClearAll />
      </div>
    </div>
  );
};

export default App;
