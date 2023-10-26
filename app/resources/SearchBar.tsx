"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";

interface Props {
  handleSearch: (searchQuery: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input
        placeholder="Search For A Subject"
        size={"3"}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </TextField.Root>
  );
};

export default SearchBar;
