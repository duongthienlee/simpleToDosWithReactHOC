import React, { useEffect, useState } from 'react';
import TodoList from 'components/TodoList';
import TodoAdd from 'components/TodoAdd';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from 'assets/images/avatar.png'
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffd587',
      main: '#E0A458',
      dark: '#ab752b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#EBEBEB',
      dark: '#b9b9b9',
      contrastText: '#000',
    }
  },
});
const App = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    bgPaper: {
      height: '100vh',
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    appContainer: {
      padding: 0,
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: 'white',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      height: 'calc(100vh - 170px)'
    },
    bigAvatar: {
      width: 90,
      height: 90,
      borderRadius: 10
    }
  }));

  const classes = useStyles();
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Paper style={{ backgroundColor: '#E0A458' }} className={classes.bgPaper} />
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ backgroundColor: '#EBEBEB' }} className={classes.bgPaper} />
          </Grid>
          <Container className={classes.appContainer} maxWidth="sm">
            <Grid container alignItems="center" direction="row" item xs={12}>
              <Avatar variant="rounded" alt="Thien Ly" src={avatarImg} className={classes.bigAvatar} />
              <Typography style={{ marginLeft: 20 }} color="textSecondary" component="h4" variant="h6">
                Hello Thien
            </Typography>
            </Grid>
            <TodoAdd />
            <TodoList
              isLoadingTodos={!isLoaded}
              todos={['Go To Metro Station', 'Study Programming at School']} />
          </Container>
        </Grid>
      </div>

    </ThemeProvider>
  )
}

export default App;