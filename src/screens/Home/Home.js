import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/Header/Header";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import moviesData from "../../common/moviesData";
import {
  Card,
  CardContent,
  FormControl,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input
} from "@material-ui/core";
import genres from "../../common/genres";
import artists from "../../common/artists";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backGroundColor: theme.palette.background.paper
  },
  upComingMoviesHeading: {
    textAlign: "center",
    background: "#ff9999",
    padding: "8px",
    fontSize: "1rem"
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%"
  },
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
    maxWidth: 240
  },
  title: {
    color: theme.palette.primary.light
  }
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: "",
      genres: [],
      artists: []
    };
  }

  movieNameChangeHandler = event => {
    this.setState({ movies: event.target.value });
  };

  genreSelectHandler = event => {
    this.setState({ genres: event.target.value });
  };

  artistSelectHandler = event => {
    this.setState({ artists: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.upComingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
        <GridList cols={6} className={classes.gridListUpcomingMovies}>
          {moviesData.map(movie => (
            <GridListTile key={movie.id}>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="movie-poster"
              />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          ))}
        </GridList>
        <div className="flex-container">
          <div className="left">
            <GridList
              cellHeight={350}
              cols={4}
              className={classes.gridListMain}
            >
              {moviesData.map(movie => (
                <GridListTile
                  className="released-movie-grid-item"
                  key={"grid" + movie.id}
                >
                  <img
                    src={movie.poster_url}
                    className="movie-poster"
                    alt={movie.title}
                  />
                  <GridListTileBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div className="right">
            <Card>
              <CardContent>
                <FormControl classes={classes.formControl}>
                  <Typography className={classes.title} color="textSecondary">
                    FIND MOVIES BY:
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                  <Input
                    id="movieName"
                    onChange={this.movieNameChangeHandler}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-checkbox">
                    Genre
                  </InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(",")}
                    value={this.state.genres}
                    onChange={this.genreSelectHandler}
                  >
                    <MenuItem value="0">None</MenuItem>
                    {genres.map(genre => (
                      <MenuItem key={genre.id} value={genre.name}>
                        <Checkbox
                          checked={this.state.genres.indexOf(genre.name) > -1}
                        />
                        <ListItemText primary={genre.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-checkbox">
                    Artist
                  </InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(",")}
                    value={this.state.artists}
                    onChange={this.artistSelectHandler}
                  >
                    <MenuItem value="0" />
                    {artists.map(artist => (
                      <MenuItem
                        key={artist.id}
                        value={artist.first_name + " " + artist.last_name}
                      >
                        <Checkbox
                          checked={
                            this.state.artists.indexOf(
                              artist.first_name + " " + artist.last_name
                            ) > -1
                          }
                        />
                        <ListItemText
                          primary={artist.first_name + " " + artist.last_name}
                        />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
