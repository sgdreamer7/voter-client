import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const styles = (theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  addVoteButton: {
    paddingBottom: "10px"
  }
});

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <Button color="primary" className={classes.addVoteButton}>
              Add new poll
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Polls</h4>
                <Grid container>
                  <GridItem xs={6} sm={6} md={6}>
                    <Button color="primary">Not voted polls</Button>
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <Button color="disabled">Voted polls</Button>
                  </GridItem>
                </Grid>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableData={Array.from(Array(10).keys()).map((index) => [
                    <Button color="secondary" fullWidth align="left">
                      {`This is the Question for poll #${index + 1}, please answer it`}
                    </Button>
                  ])}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withStyles(dashboardStyle)(Dashboard));
