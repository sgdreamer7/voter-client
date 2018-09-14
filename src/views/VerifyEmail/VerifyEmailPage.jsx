import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

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

function VerifyEmailPage(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Email verification to finish registration with Home Expense App
              </h4>
              <p className={classes.cardCategoryWhite}>
                Please, confirm email address
              </p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                      disabled: true
                    }}
                    inputProps={{ value: "vns.scherbina@gmail.com" }}
                  />
                </GridItem>
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="VerificationCode"
                    id="verification-code"
                    formControlProps={{
                      fullWidth: true,
                      disabled: true
                    }}
                    inputProps={{ value: "0123456789" }}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">Verify email</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Link color="secondary" to="/signin">
                    already have an account? sign-in
                  </Link>
                </GridItem>
              </Grid>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(VerifyEmailPage);
