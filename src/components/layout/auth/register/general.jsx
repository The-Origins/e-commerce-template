import { Person, PhoneInTalk } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const GeneralInfo = ({ form, setStage, country_codes, }) => {
  const { password, confirmPassword, ...generalErrors } = form.errors;
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <Person fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              name<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"15px 15px 0px 15px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={isNotPhone ? "20px" : 0}
          >
            <TextField
              variant="outlined"
              type="name"
              name="firstName"
              value={form.values.firstName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={
                Boolean(form.touched.firstName) &&
                Boolean(form.errors.firstName)
              }
              helperText={
                (form.touched.firstName && form.errors.firstName) || " "
              }
              label={"First name"}
              sx={{ flexBasis: 200, flexGrow: 1 }}
            />
            <TextField
              variant="outlined"
              type="name"
              label={"Last name"}
              name="lastName"
              value={form.values.lastName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={
                Boolean(form.touched.lastName) && Boolean(form.errors.lastName)
              }
              helperText={
                (form.touched.lastName && form.errors.lastName) || " "
              }
              sx={{ flexBasis: 200, flexGrow: 1 }}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <PhoneInTalk fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              contact<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"15px 15px 0px 15px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={isNotPhone ? "20px" : 0}
          >
            <TextField
              variant="outlined"
              type="email"
              label={"Email"}
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={Boolean(form.touched.email) && Boolean(form.errors.email)}
              helperText={(form.touched.email && form.errors.email) || " "}
              sx={{ flexBasis: 200, flexGrow: 1 }}
            />
            <TextField
              type="tel"
              placeholder="phone number"
              name="phoneNumber"
              value={form.values.phoneNumber}
              onChange={form.handleChange}
              error={
                Boolean(form.touched.phoneNumber) &&
                Boolean(form.errors.phoneNumber)
              }
              helperText={
                (form.touched.phoneNumber && form.errors.phoneNumber) || " "
              }
              sx={{
                flexBasis: 200,
                flexGrow: 1,
                "& > div": { padding: 0 },
                "& > div > div": { marginRight: "5px" },
              }}
              InputProps={{
                startAdornment: (
                  <Select
                    autoWidth
                    name="phoneCode"
                    value={form.values.phoneCode}
                    onChange={form.handleChange}
                    renderValue={(value) => value}
                  >
                    {country_codes.map((code) => (
                      <MenuItem value={code.code}>
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Typography>{code.name}</Typography>
                          <Typography>{code.code}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={() => setStage(2)}
          disabled={
            Boolean(Object.keys(generalErrors).length) ||
            !Boolean(Object.keys(form.touched).length)
          }
        >
          next
        </Button>
      </Box>
    </Box>
  );
};

export default GeneralInfo;
