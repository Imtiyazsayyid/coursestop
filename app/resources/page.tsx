"use client";

import { Flex, Grid, ScrollArea } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SubjectCard from "./SubjectCard";
import { Subject } from "@prisma/client";
import axios from "axios";

const ResourcesPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchAllSubjects() {
      const res = await axios.get("/api/subjects", {
        params: {
          searchQuery,
        },
      });
      setSubjects(res.data);
    }

    fetchAllSubjects();
  }, [searchQuery]);

  return (
    <Flex direction={"column"} className="py-20" width={"100%"} gap={"3"}>
      <SearchBar handleSearch={(searchQuery) => setSearchQuery(searchQuery)} />
      <ScrollArea scrollbars="vertical" style={{ height: "39rem" }}>
        <Grid columns={"3"} gap={"2"} mt={"6"} px={"3"}>
          {subjects.map((subject) => (
            <SubjectCard subject={subject.title} img={subject.img} />
          ))}
        </Grid>
      </ScrollArea>
    </Flex>
  );
};

export default ResourcesPage;
