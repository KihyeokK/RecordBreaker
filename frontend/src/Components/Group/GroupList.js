import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Group from "./Group";

const GroupList = () => {
  const fetchedGroups = [
    {
      groupID: "dfdd",
      name: "CodeJam",
      numMembers: 5,
      members: [],
      isPublic: false,
      messages: [],
      createdAt: new Date(),
    },
    {
      groupID: "asga",
      name: "Manaba!!",
      numMembers: 24,
      members: [],
      isPublic: false,
      messages: [],
      createdAt: new Date(),
    },
    {
      groupID: "hhrf",
      name: "Taylor Swift",
      numMembers: 1000,
      members: [],
      isPublic: true,
      messages: [],
      createdAt: new Date(),
    },
  ];

  return (
    <Box sx={{ml:3, mr: 3, mt: 3}}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {fetchedGroups.map((group) => {
          return (
            <Grid item xs={6}>
              <Group
                groupName={group.name}
                numMembers={group.numMembers}
                numGoldenDiscs={group.members}
                isPublic={group.isPublic}
                messages={group.messages}
                createdAt={group.createdAt}
              ></Group>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GroupList;
