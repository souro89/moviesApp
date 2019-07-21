import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/Header/Header";
import { withStyles } from "@material-ui/core/styles";
import MoviesData from "../../common/moviesData";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import moviesData from "../../common/moviesData";

const styles = themes => ({
  root: {
    flexGrow: 1,
    backGroundColor: themes.palette.background.paper
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
  }
});

class Home extends Component {
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
      </div>
    );
  }
}

export default withStyles(styles)(Home);
