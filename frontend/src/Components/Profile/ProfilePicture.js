import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Daniel from '../../images/danielz.png';

const ProfilePicture = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Daniel Zhang"
                    src={Daniel}
                    sx={{ width: 118, height: 118, flexShrink: 0 }}
                />
            </Stack>
            <Typography
                variant="body1"
                sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: 15,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    width: 95,
                    height: 15,
                    flexShrink: 0,
                    whiteSpace: 'nowrap', // Add this property
                }}
            >
                Daniel Zhang
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    width: 95,
                    height: 15,
                    flexShrink: 0,
                }}
            >
                d_zhang2
            </Typography>
        </div>
    );
}

export default ProfilePicture;
