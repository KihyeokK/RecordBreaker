import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Group from "./Group";
import NewGroup from "./NewGroup";

const GroupList = () => {
  const fetchedGroups = [
    {
      groupId: "dfdd",
      name: "CodeJam",
      numMembers: 5,
      members: [],
      isPublic: false,
      messages: [],
      createdAt: new Date(),
    },
    {
      groupId: "asga",
      name: "Manaba!!",
      numMembers: 24,
      members: [],
      isPublic: false,
      messages: [],
      createdAt: new Date(),
    },
    {
      groupId: "hhrf",
      name: "Taylor Swift",
      numMembers: 1000,
      members: [],
      isPublic: true,
      messages: [],
      createdAt: new Date(),
    },
  ];

  return (
    <Box sx={{ ml: 3, mr: 3, mt: 3 }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {fetchedGroups.map((group) => {
          return (
            <Grid item xs={6}>
              <Group
                groupId={group.groupId}
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
        <Grid item xs={6}>
          <NewGroup></NewGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupList;
