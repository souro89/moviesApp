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
  },
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer"
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
          <div className="right" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
