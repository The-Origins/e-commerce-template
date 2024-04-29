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
    <Box
      width={"100%"}
      height={"100%"}
      padding={"20px"}
      display={"flex"}
      sx={{ overflowY: "scroll" }}
      gap={"20px"}
    >
      <Box display={"flex"} height={""} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileDetail
          icon={<AccountCircle />}
          title={"Name"}
          type={"name"}
          value={`${props.user.name.first} ${props.user.name.last}`}
        />
        <UserProfileDetail
          icon={<Mail />}
          title={"Email"}
          type={"email"}
          value={props.user.email}
        />
        <UserProfileDetail
          icon={<Phone />}
          title={"Phone no"}
          type="tel"
          value={`(${props.user.phone.code}) ${props.user.phone.number}`}
        />
        <UserProfileDetail
          icon={<Place />}
          title={"Address"}
          type={"text"}
          value={`${props.user.address.address}, ${props.user.address.city}`}
        />
        <UserProfileDetail
          icon={<LocalShipping />}
          title={"Recent delivery location"}
          value={`${props.user.recentDeliveryLocation.address}, ${props.user.recentDeliveryLocation.city}`}
          noChange={true}
        />
      </Box>
    </Box>
  );
};

export default UserProfile;
