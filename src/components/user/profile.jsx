import React, { useState } from "react";
import { Box, Button, useMediaQuery} from "@mui/material";
import {
  AccountCircle,
  Lock,
  Mail,
  Paid,
  Phone,
} from "@mui/icons-material";
import UserProfileDetail from "./profileDetail";
import UserProfileList from "./profileList";
import EditModal from "../layout/modals/edit";
import ChangePassword from "../forms/changePassword";
import { currencies } from "country-data";

const UserProfile = ({ user, setConfirmationModal }) => {
  user = user.data;
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [isChangePassword, setIsChangePassword] = useState(false);

  return (
    <Box
      padding={isNotPhone ? "20px" : "20px 0px"}
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
        <ChangePassword
          onCancel={() => setIsChangePassword(false)}
          onComplete={() => setIsChangePassword(false)}
        />
      </EditModal>
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileDetail
          icon={<AccountCircle />}
          title={"name"}
          description={`${user.name.first} ${user.name.last}`}
          disableEdit
        />
        <UserProfileDetail
          icon={<Mail />}
          title={"email"}
          details={{ email: user.email }}
          description={user.email}
        />
        <UserProfileDetail
          icon={<Phone />}
          title={"phone number"}
          details={{
            phoneCode: user.phone.code,
            phoneNumber: user.phone.number,
          }}
          description={user.phone.number}
        />
        <UserProfileDetail
          icon={<Paid />}
          title={"currency"}
          description={currencies[user.payments.currency].name}
          details={{ currency: user.payments.currency }}
        />
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
        <UserProfileList
          data={user.payments.saved}
          type="payment"
          setConfirmationModal={setConfirmationModal}
        />
        <UserProfileList
          data={user.addresses.saved}
          type="address"
          setConfirmationModal={setConfirmationModal}
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
