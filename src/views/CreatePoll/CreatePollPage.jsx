import React from "react";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Cancel from "@material-ui/icons/Cancel";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function CreatePollPage(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create new poll</h4>
              <p className={classes.cardCategoryWhite}>
                Please, add your question and answers for polling
              </p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Question"
                    id="question"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Table
                    tableHeaderColor="primary"
                    tableData={Array.from(Array(5).keys()).map((index) => [
                      <FormLabel>{`This is the Answer #${index + 1} for the Question`}</FormLabel>,
                      <div>
                        <Button color="info">
                          <ArrowUpward />
                        </Button>
                        <Button color="info">
                          <ArrowDownward />
                        </Button>
                        <Button color="warning">
                          <Cancel />
                        </Button>
                      </div>
                    ])}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary">Add answer</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(CreatePollPage);
