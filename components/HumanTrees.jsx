import React from "react";
import { Stack, Avatar, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import styles from "../styles/HumanTree.module.css";

const HumanTree = ({ data }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        padding: "10px",
        borderRadius: "8px",
        bgcolor: "white",
        border: "1px solid #ddd",
        borderTop: "4px solid #8c4cf6",
        display: "inline-block",
        width: "240px",
        height: "200px",
        marginRight: "20px",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1,
          width: "10px",
          height: "10px",
        }}
        aria-label="edit"
      >
        <EditIcon />
      </IconButton>

      <Stack direction="column" alignItems="center" spacing={2} mt={4}>
        <div className={styles.avatarContainer}>
          <Avatar
            alt="Avatar"
            sx={{
              width: 50,
              height: 50,
              borderRadius: 60,
              marginBottom: 1,
              bgcolor: "#d395e0",
            }}
          />
          <Typography sx={{ fontWeight: 600 }}>{data.name}</Typography>
        </div>
        <div className={styles.textContainer}>
          <strong className={styles.role}>Role </strong>
          <span className={styles.designation}>{data.designation}</span>
        </div>
      </Stack>
    </Stack>
  );
};

export default HumanTree;
