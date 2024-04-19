import React from "react";
import { Box } from "@mui/material";
import {
  AccountCircle,
  LocalShipping,
  Mail,
  Phone,
  Place,
} from "@mui/icons-material";
import UserProfileDetail from "./profileDetail";

const UserProfile = (props) => {
  return (
    <Box width={"100%"} height={"100%"} sx={{ overflowY: "scroll" }}>
      {props.user.name && (
        <Box
          maxWidth={"100%"}
          padding={"20px"}
          display={"flex"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          <UserProfileDetail
            icon={<AccountCircle />}
            title={"Name"}
            value={`${props.user.name.first} ${props.user.name.last}`}
          />
          <UserProfileDetail
            icon={<Mail />}
            title={"Email"}
            value={props.user.email}
          />
          <UserProfileDetail
            icon={<Phone />}
            title={"Phone no"}
            value={`(${props.user.phone.code}) ${props.user.phone.number}`}
          />
          <UserProfileDetail
            icon={<Place />}
            title={"Address"}
            value={`${props.user.address.address}, ${props.user.address.city}`}
          />
          <UserProfileDetail
            icon={<LocalShipping />}
            title={"Recent delivery location"}
            value={`${props.user.recentDeliveryLocation.address}, ${props.user.recentDeliveryLocation.city}`}
            notChange={true}
          />
        </Box>
      )}
    </Box>
  );
};

export default UserProfile;
