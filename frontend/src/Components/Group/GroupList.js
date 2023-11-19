import React, { useEffect , useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Group from "./Group";
import NewGroup from "./NewGroup";
import { getUserGroups } from "../../services";

const GroupList = () => {
  const [fetchedGroups, setFetchedGroups] = useState([]);
  
  useEffect(() => {
    const fetchGroups = async () => {
      const userName = sessionStorage.getItem("userId");
      const response = await getUserGroups(userName);
      setFetchedGroups(response.groups);
    };
    fetchGroups();
  }, []);

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
