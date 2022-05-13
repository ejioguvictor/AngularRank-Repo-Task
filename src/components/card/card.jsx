import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function MemberCard() {
  return (
    <Box width="400px">
      <Card>
        <CardMedia
          component="img"
          height={300}
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Contributors
          </Typography>
          <Typography variant="body2" color="white">
            Followers
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MemberCard;
