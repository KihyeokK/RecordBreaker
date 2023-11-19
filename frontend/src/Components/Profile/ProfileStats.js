// ProfileStats.js

import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GoldDisc from "../../images/goldDisk.svg";

const ProfileStats = () => {
  const numberOfFriends = 500;
  const numberOfGoldenDiscs = 5;
  const numberOfSilverDiscs = 10;

  return (
    <Stack spacing={1} alignItems="center" justifyContent="center" flexDirection="row">
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: 18,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
        }}
      >
        {numberOfFriends}
      </Typography>
      <Typography
        variant="caption"
        color="#898989"  // Set color for the "Friends" typography
        sx={{
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: 13,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        Friends
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center">
        <img src={GoldDisc} alt="Golden Disc" width={20} height={20} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          {numberOfGoldenDiscs}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <img src={GoldDisc} alt="Golden Disc" width={20} height={20} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          {numberOfSilverDiscs}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileStats;
