import React from 'react'
import { Box } from '@mui/material'
import NotificationItem from './notificationItem'

const Notifications = ({user}) => {
  return (
    <Box width={"100%"} height={"100%"} padding={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"} sx={{overflowY:"scroll"}}>
        {user.notifications.items.map((notification) => <NotificationItem {...notification} />)}
    </Box>
  )
}

export default Notifications