
import { Chip } from "@mui/material";
import MUIDataTable, { TableFilterList, TableHead } from "mui-datatables";
import styled from 'styled-components'

const CustomTableHead = (props) => {
  return <TableHead {...props} />;
};

const StyledHead = styled(CustomTableHead)`
heigh:25px;
text-align:center;`;

export const DataTable = (props) => {
  return (
    <MUIDataTable
      {...props}
      components={{
        TableHead: StyledHead,
      }}
    />
  );
};
