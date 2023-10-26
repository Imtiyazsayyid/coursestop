import { Flex } from "@radix-ui/themes";
import React from "react";
import SearchBar from "./SearchBar";

const ResourcesPage = () => {
  return (
    <Flex
      direction={"column"}
      className="h-screen w-96 border px-80 py-20"
      width={"100%"}
    >
      <SearchBar />
    </Flex>
  );
};

export default ResourcesPage;
