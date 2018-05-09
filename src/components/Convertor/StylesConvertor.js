export const styles = theme => ({
  convertWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 850,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2,
    background: "#e4e4e473"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    maxWidth: 300
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 300
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  buttonWrap: {
    textAlign: "center"
  },
  button: {
    margin: theme.spacing.unit
  }
});
