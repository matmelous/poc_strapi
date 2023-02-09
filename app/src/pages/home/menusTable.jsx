import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMenusData } from "../../services";

export default function MenusTable() {
  const [menus, setMenus] = React.useState([]);

  React.useEffect(() => {
    getMenusData().then((menusData) => {
      setMenus(menusData.data.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {menus.length > 0 && (
            <TableRow>
              {Object.keys(menus[0].attributes).map((key) => {
                return <TableCell>{key}</TableCell>;
              })}
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {menus.map((row) => (
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
