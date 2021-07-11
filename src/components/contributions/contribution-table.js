import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useSelector } from "react-redux";
import { updateStoreContributionDetails } from "../../common/common-functions";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(contribution, totalContributionInMonth) {
  let history = [];
  contribution.Contributors.map((obj) => {
    history.push({
      date: obj.ContributionDate,
      contributorFullName: obj.Contributor["FullName"],
      amount: obj.ContributionAmount,
    });
  });

  return {
    contributionMonth: contribution.ContributionMonth,
    totalContributionInMonth,
    history,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.contributionMonth}
        </TableCell>
        <TableCell align="center">{row.totalContributionInMonth}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases" className="w-50">
                <TableHead>
                  <TableRow>
                    <TableCell className="font-weight-bold" align="center">
                      Date
                    </TableCell>
                    <TableCell className="font-weight-bold" align="center">
                      Contributor
                    </TableCell>
                    <TableCell className="font-weight-bold" align="center">
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.contributorFullName}
                      </TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        contributorFullName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [];

function getRowsData(contributionDetails) {
  contributionDetails &&
    contributionDetails.map((obj) => {
      let contributionAmount = 0;
      obj.Contributors.map((contributor) => {
        contributionAmount =
          contributionAmount + contributor.ContributionAmount;
      });
      rows.push(createData(obj, contributionAmount));
    });
}

export default function ContributionTable() {
  const [contributionDetails, setContributionDetails] = useState();
  const contributionDetailsState = useSelector(
    (state) => state.contributionDetails
  );

  useEffect(() => {
    setContributionDetails(contributionDetailsState);
    !contributionDetailsState &&
      fetch(
        process.env.REACT_APP_API_BASEURL +
          process.env.REACT_APP_API_ENDPOINT_CONTRIBUTIONDETAILS
      )
        .then((resp) => resp.json())
        .then((data) => {
          setContributionDetails(data);
          updateStoreContributionDetails(data);
        });
  }, []);

  return (
    <>
      {rows && rows.length === 0 && getRowsData(contributionDetails)}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="font-weight-bold">Month</TableCell>
              <TableCell align="center" className="font-weight-bold">
                Contributed Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
