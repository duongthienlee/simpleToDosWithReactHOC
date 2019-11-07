import React, { useEffect, useState } from 'react';
import TodoList from 'components/TodoList';
import TodoAdd from 'components/TodoAdd';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from 'assets/images/avatar.png'
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'

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
      paddingBottom: 60,
      boxShadow: '-10px 10px 15px rgba(13, 1, 1,.16)'
    },
    bigAvatar: {
      width: 60,
      height: 60,
      borderRadius: 10,
      margin:5
    }
  }));

  const classes = useStyles();
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const { todosArr } = useSelector(state => state.todos)

  return (
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
          <Grid item xs={12}>
            <TodoAdd />
            <TodoList
              isLoadingTodos={!isLoaded}
              todos={todosArr}
            />
          </Grid>
        </Container>
      </Grid>
    </div>
  )
}

export default App;