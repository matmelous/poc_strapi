import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCustomers } from "../../services";

export default function CustomersTable() {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    getCustomers().then((customersData) => {
      setCustomers(customersData.data.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {customers.length > 0 && (
            <TableRow>
              {Object.keys(customers[0].attributes).map((key) => {
                return <TableCell>{key}</TableCell>;
              })}
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <TableRow>
              {Object.values(row.attributes).map((value) => {
                return <TableCell>{value}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
