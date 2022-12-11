import React, { FC } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"

import { IMainLayoutProps } from "./types"

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              // ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ margin: "24px 0" }}>{children}</Box>
      </Container>
    </div>
  )
}

export default MainLayout
