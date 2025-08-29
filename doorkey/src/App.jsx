import rectangle165 from "@mui/icons-material/Star";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import doorkeyCopy1 from "./doorkey copy 1.png";

const navigationItems = [
  { label: "Home", active: true },
  { label: "Investment", active: false },
  { label: "About Us", active: false },
  { label: "Contact Us", active: false },
];

export const Frame = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavClick = (label) => {
    setActiveItem(label);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#06235d",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "1520px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#06235d",
          width: "100%",
          position: "left",
          height: "1507px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "293px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "50px",
              height: "293px",
              top: 0,
              left: 0,
              transform: "rotate(180deg)",
            }}
          >
            {/* <Box
              component="img"
              src={rectangle165}
              alt="Rectangle"
              sx={{
                position: "absolute",
                width: "67px",
                height: "293px",
                top: 0,
                left: 0,
                transform: "rotate(-180deg)",
              }}
            /> */}
          </Box>

          <Stack
            direction="row"
            spacing={4}
            sx={{
              position: "absolute",
              top: "38px",
              left: "405px",
              width: "1114px",
              height: "108px",
              alignItems: "center",
            }}
          >
            {navigationItems.map((item, index) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.label)}
                sx={{
                  padding: "16px 16px 4px 16px",
                  borderRadius: "40px",
                  backgroundColor:
                    activeItem === item.label
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Kadwa-Bold, Helvetica",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "30px",
                    textAlign: "center",
                    letterSpacing: "0",
                    lineHeight: "normal",
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Typography>
              </Button>
            ))}
          </Stack>

          <Box
            component="img"
            src={doorkeyCopy1}
            alt="Doorkey copy"
            sx={{
              position: "absolute",
              width: "150px",
              height: "155px",
              top: "10px",
              left: "2px",
              aspectRatio: "1.02",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Frame;