import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const PurchaseHistory = () => {
    const { user } = useAuth();
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/purchasedone?email=${user.email}`)
            .then(res => res.json())
            .then(data => setPurchaseHistory(data))
    }, [])
    return (
        <div>
            <h2>Total Purchase: {purchaseHistory.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Car Name</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">User email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchaseHistory.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Name}
                                </TableCell>
                                <TableCell align="right">{row.displayName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PurchaseHistory;