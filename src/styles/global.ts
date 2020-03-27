import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  buttonPrimary: {
    backgroundColor: '#43425D',
    color: '#fff',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    backgroundColor: '#4452A8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  ImgLogo: {
    width: '40px',
    height: '40px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#4452A8',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    padding: 0,
    marginRight: 36,
    '&:active': {
      color: 'orange',
    },
    '&:hover': {
      color: 'orange',
    },
  },
  menuButtonHidden: {
    display: 'none',
  },
  chevronLeft: {
    color: '#fff',
    '&:active': {
      color: 'orange',
    },
    '&:hover': {
      color: 'orange',
    },
  },
  orangeEffect: {
    color: '#fff',
    '&:active': {
      color: 'orange',
    },
    '&:hover': {
      color: 'orange',
    },
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: '#43425D',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: 0,
  },
  drawerPaperClose: {
    backgroundColor: '#43425D',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 400,
  },
  secondaryFixedHeight: {
    height: 500,
  },
  SimulatorFixedHeight: {
    height: 800,
  },
  currencyText: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },
  processingButton: {
    width: '30%',
    alignSelf: 'center',
    margin: '20px 0 40px',
  },
  addAssetButton: {
    width: '100%',
    alignSelf: 'center',
    margin: '20px 0 40px',
  },
}));

export default useStyles;
