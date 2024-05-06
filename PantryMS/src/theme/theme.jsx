// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { menuItem, paper } from './theme.jsx'; // Ensure this path is correct
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
    const theme = useTheme(); // This hook provides the theme

    return (
        <Box sx={paper(theme, { dropdown: true })}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem button component={Link} to="/dashboard" sx={menuItem(theme)}>
                    <ListItemIcon>
                        <i className="bi-speedometer2"></i>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/dashboard/employee" sx={menuItem(theme)}>
                    <ListItemIcon>
                        <i className="bi-people"></i>
                    </ListItemIcon>
                    <ListItemText primary="Manage Food Items" />
                </ListItem>
                <ListItem button component={Link} to="/dashboard/categories" sx={menuItem(theme)}> {/* Fixed typo in path */}
                    <ListItemIcon>
                        <i className="bi-columns"></i>
                    </ListItemIcon>
                    <ListItemText primary="Category" />
                </ListItem>
                <ListItem button component={Link} to="/dashboard/profile" sx={menuItem(theme)}>
                    <ListItemIcon>
                        <i className="bi-person"></i>
                    </ListItemIcon>
                    <ListItemText primary="Product Profile" />
                </ListItem>
                <ListItem button component={Link} to="/" sx={menuItem(theme)}>
                    <ListItemIcon>
                        <i className="bi-power"></i>
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );
}


export default Dashboard;
