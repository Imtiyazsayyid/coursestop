"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";

const SearchBar = () => {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input placeholder="Search For Subject" size={"3"} />
    </TextField.Root>
  );
};

export default SearchBar;
