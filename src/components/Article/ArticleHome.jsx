import React from "react";
import { SideBar } from "./SideBar";
import { RightSideBar } from "./RightSideBar";
export const ArticleHome = ({ data }) => {
  return (
    <div className=" mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className=" w-full md:w-1/5 order-2 md:order-1 sticky top-0 ">
        <SideBar />
      </div>

      <div className=" w-full md:w-3/5 shadow-md p-4 order-1 md:order-2   overflow-y-auto scrollbar-hide">
       
     
     
        {data ? (
          <>
            <div
              id="artice-main"
              dangerouslySetInnerHTML={{ __html: data?.data }}
            />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className=" w-full md:w-1/5  order-3 md:order-3 sticky top-8">
        <RightSideBar />
      </div>
    </div>
  );
};
