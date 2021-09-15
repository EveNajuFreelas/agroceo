import { makeStyles } from "@material-ui/core";
import styled from 'styled-components';

const drawerWidth = 260;

export const Body = styled.div`
    width: 100%;
`;

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: '#02733E',
      zIndex: 999,
    },
    drawerClose: {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: 300,
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      }),
      overflowX: 'hidden',
      backgroundColor: '#02733E',
      width: 70,
      zIndex: 999,
    },
  }));