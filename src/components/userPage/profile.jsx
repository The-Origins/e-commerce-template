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
import { isValidPhoneNumber } from "libphonenumber-js";

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
          title={"name"}
          description={`${props.user.name.first} ${props.user.name.last}`}
          editable={false}
        />
        <UserProfileDetail
          icon={<Mail />}
          title={"email"}
          details={{ email: props.user.email }}
          description={props.user.email}
          validator={{
            email: [
              { key: (value) => value.length, message: "required" },
              {
                key: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                message: "Email must be valid",
              },
            ],
          }}
          editable={true}
        />
        <UserProfileDetail
          icon={<Phone />}
          title={"phone number"}
          details={{
            code: props.user.phone.code,
            number: props.user.phone.number,
          }}
          description={props.user.phone.number}
          validator={{
            number: [
              {
                key: (value, form) => value.length > form.code.length,
                message: "required",
              },
              {
                key: (value, form) => isValidPhoneNumber(value, form.code),
                message: "invalid phone number",
              },
            ],
          }}
          editable={true}
        />
        <UserProfileDetail
          icon={<Paid />}
          title={"currency"}
          description={props.user.payments.currency.name}
          details={{ currency: props.user.payments.currency.code }}
          editable={true}
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
