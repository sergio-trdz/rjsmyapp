import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const DataRow = ({id, priority, level, name, interested}) => {
    return (
        <TableRow>
            <TableCell align="center">{priority}</TableCell>
            <TableCell align="center">{level}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{interested ? "YES" : "NO"}</TableCell>
            <TableCell align="center"><input type="radio" name={id}/></TableCell>
            <TableCell align="center"><input type="radio" name={id}/></TableCell>
            <TableCell align="center"><input type="radio" name={id}/></TableCell>
        </TableRow>
    )
}

export default DataRow;