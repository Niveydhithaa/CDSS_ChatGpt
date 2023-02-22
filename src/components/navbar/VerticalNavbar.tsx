import { Drawer, List, ListItem, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

const PermanentDrawer = () => {
  const [selectedMenu, setSelectedMenu] = useState(1)
  const handlerMenuItem = (tabNumber: number) => {
    setSelectedMenu(tabNumber)
  }
  return (
      <List>
        <MenuItem onClick={() => handlerMenuItem(0)} selected={selectedMenu==0}>
          <ListItem key="dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </MenuItem>
        <MenuItem onClick={() => handlerMenuItem(1)} selected={selectedMenu==1}>
          <ListItem key="patients">
            <ListItemText primary="Patients" />
          </ListItem>
        </MenuItem>
      </List>
  );
};

export default PermanentDrawer;
