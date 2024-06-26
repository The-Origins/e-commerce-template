import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  AccountCircle,
  Explore,
  Mail,
  Paid,
  Payments,
  Phone,
} from "@mui/icons-material";
import UserProfileDetail from "./profileDetail";
import UserProfileList from "./profileList";


const UserProfile = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      width={"100%"}
      height={"100%"}
      padding={isNotPhone ? "20px" : "20px 0px"}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: isNotPhone ? "10px" : 0,
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "25px",
          bgcolor: theme.palette.grey[300],
        },
        "&::-webkit-scrollbar-thumb:hover": {
          cursor: "pointer",
          bgcolor: theme.palette.grey[400],
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
          value={{
            code: props.user.phone.code,
            number: props.user.phone.number,
          }}
        />
        <UserProfileDetail
          icon={<Paid />}
          title={"Currency"}
          type="select"
          value={props.user.payments.currency.code}
        />
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileList
          icon={<Payments />}
          title={"Saved Payments"}
          data={props.user.payments.saved}
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
