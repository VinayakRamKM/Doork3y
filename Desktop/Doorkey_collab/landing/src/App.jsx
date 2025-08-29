import ArrowForward from "@mui/icons-material/ArrowForward";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const navigationItems = [
  { label: "Dashboard", active: false },
  { label: "Entrepreneur Profile", active: false },
  { label: "Explore Entrepreneur", active: true },
];

const processSteps = [
  "Register in minutes",
  "Explore 40+ sectors",
  "Track your investments",
];

export const Frame = () => {
  const [activeNav, setActiveNav] = useState("Explore Entrepreneur");

  const handleNavClick = (label) => {
    setActiveNav(label);
  };

  return (
    <Box
      sx={{
        minHeight: "150vh",
        background: `url('/abc.jpg')`, // Correct path from public folder
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, flex: 1 }}>
        {/* Header Section */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ pt: 4, mb: 6 }}
        >
          {/* Investment Network Button */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e7f1ff",
                color: "#e7f1ff",
                fontSize: "20px",
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: "23.5px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#e7f1ff",
                  backgroundColor: "rgba(231, 241, 255, 0.1)",
                },
              }}
            >
              Investment Network
            </Button>
          </Box>

          {/* User Profile Section */}
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* --- AVATAR SRC PATH CORRECTED HERE --- */}
            <Avatar
              src="/image-2.png" // Correct path from public folder
              sx={{
                width: 65,
                height: 71,
                borderRadius: 1,
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Jersey_25-Regular, Helvetica",
                  fontSize: "40px",
                  color: "#f8fafc",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Rahul Sharma
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter-Regular, Helvetica",
                  fontSize: "32px",
                  color: "#dbeafe",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                rahul.sharma@yahoo.com
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Main Content */}
        <Box sx={{ textAlign: "left", mb: 8, maxWidth: "1392px" }}>
          <Typography
            component="h1"
            sx={{
              fontSize: "96px",
              fontFamily: "Inter-Light, Helvetica",
              fontWeight: 300,
              lineHeight: "normal",
              mb: 6,
            }}
          >
            <Box component="span" sx={{ color: "#e7f1ff" }}>
              Connect your{" "}
            </Box>
            <Box component="span" sx={{ color: "#ffffff", fontWeight: 700 }}>
              Innovative startup idea{" "}
            </Box>
            <Box component="span" sx={{ color: "#e7f1ff" }}>
              to{" "}
            </Box>
            <Box component="span" sx={{ color: "#e7f1ff", fontWeight: 700 }}>
              visionary investors
            </Box>
            <Box component="span" sx={{ color: "#e7f1ff" }}>
              {" "}
              today.
            </Box>
          </Typography>

          {/* Process Steps */}
          <Stack
            direction="column"
            alignItems="left"
            spacing={1}
            sx={{ mb: 8, maxWidth: "800px" }}
          >
            {processSteps.map((step, index) => (
              <React.Fragment key={step}>
                <Typography
                  sx={{
                    fontFamily: "Inter-ExtraLight, Helvetica",
                    fontWeight: 200,
                    color: "#e7f1ff",
                    fontSize: "24px",
                    lineHeight: "100px",
                    WebkitTextStroke: "1px #e7f1ff",
                    minWidth: "339px",
                    textAlign: "left",
                  }}
                >
                  {step}
                </Typography>
                {index < processSteps.length - 1 && (
                  <Box
                    sx={{
                      width: "77px",
                      height: "1px",
                      backgroundColor: "#e7f1ff",
                      mx: 2,
                    }}
                  />
                )}
                {index === processSteps.length - 1 && (
                  <ArrowForward
                    sx={{
                      color: "#e7f1ff",
                      fontSize: "44px",
                      ml: 2,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Bottom Navigation */}
      {/* --- PADDING CHANGED HERE TO MOVE BUTTONS UP --- */}
      <Box sx={{ mt: "auto", pb: 12 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Stack direction="row" spacing={0} sx={{ maxWidth: "1988px" }}>
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.label)}
                sx={{
                  width: "450px",
                  height: "80px",
                  fontSize: "36px",
                  backgroundColor:
                    activeNav === item.label ? "#1e40af" : "#374151",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontFamily: "Inter-Bold, Helvetica",
                  borderRadius: 0,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor:
                      activeNav === item.label ? "#1e40af" : "#4b5563",
                  },
                  "&:first-of-type": {
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  },
                  "&:last-of-type": {
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Frame;