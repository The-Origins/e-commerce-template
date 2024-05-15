import React from "react";
import { Box } from "@mui/material";
import {
  AccountCircle,
  Explore,
  Mail,
  Payments,
  Phone,
} from "@mui/icons-material";
import UserProfileDetail from "./profileDetail";
import UserProfileList from "./profileList";

const UserProfile = (props) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      padding={"20px"}
      
      sx={{
        overflowY: "scroll",
        scrollbarWidth:"10px",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width:"10px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "25px",
          bgcolor: "text.secondary",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          cursor: "pointer",
        },
      }}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
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
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileList
          icon={<Payments />}
          title={"Saved Payments"}
          data={props.user.payment.saved}
          type="payment"
        />
        <UserProfileList
          icon={<Explore />}
          title={"Saved Addresses"}
          data={props.user.addresses.saved}
          type="address"
        />
      </Box>
    </Box>
  );
};

export default UserProfile;
