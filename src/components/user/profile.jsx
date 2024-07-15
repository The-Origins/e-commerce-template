import React, { useState } from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import {
  AccountCircle,
  Explore,
  Lock,
  Mail,
  Paid,
  Payments,
  Phone,
} from "@mui/icons-material";
import UserProfileDetail from "./profileDetail";
import UserProfileList from "./profileList";
import { isValidPhoneNumber } from "libphonenumber-js";
import EditModal from "../layout/editModal";
import ChangePasswordProfile from "./changePasswordProfile";

const UserProfile = ({ user }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [isChangePassword, setIsChangePassword] = useState(false);

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
      <EditModal
        isEdit={isChangePassword}
        handleClose={() => setIsChangePassword(false)}
        width={"min(500px, 90%)"}
        height={"600px"}
      >
        <ChangePasswordProfile {...{ setIsChangePassword }} />
      </EditModal>
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileDetail
          icon={<AccountCircle />}
          title={"name"}
          description={`${user.name.first} ${user.name.last}`}
          editable={false}
        />
        <UserProfileDetail
          icon={<Mail />}
          title={"email"}
          details={{ email: user.email }}
          description={user.email}
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
            code: user.phone.code,
            number: user.phone.number,
          }}
          description={user.phone.number}
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
          description={user.payments.currency.name}
          details={{ currency: user.payments.currency.code }}
          editable={true}
        />
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileList
          icon={<Payments />}
          title={"Saved Payments"}
          data={user.payments.saved}
          type="payment"
        />
        <UserProfileList
          icon={<Explore />}
          title={"Saved Addresses"}
          data={user.addresses.saved}
          type="address"
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} padding={"30px"}>
        <Button
          sx={{ textDecoration: "underline", alignItems: "flex-start" }}
          startIcon={<Lock />}
          onClick={() => setIsChangePassword(true)}
        >
          change password
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
