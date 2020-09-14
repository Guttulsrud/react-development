import Row from 'react-bootstrap/Row';
import React from 'react';
import {StockCard, StockTableRow} from './Stock';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';


export const Stocks = () => {


    //EV/EVITBA - 10 or below is acceptable, 7.5 or below is fantastic

    const stonks = [
        {
            ticker: 'BWE.OL',
            title: 'BW Energy Limited',
            price: 23,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'KAHOOT.MM',
            title: 'Kahoot AS',
            price: 40,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'ABP.OL',
            title: 'Aker BP',
            price: 230,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'BWO.OL',
            title: 'BW Offshore Ltd.',
            price: 140,
            new: false,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'KAHOOT.MM',
            title: 'Kahoot AS',
            price: 40,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'KAHOOT.MM',
            title: 'Kahoot AS',
            price: 40,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'KAHOOT.MM',
            title: 'Kahoot AS',
            price: 40,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },
        {
            ticker: 'KAHOOT.MM',
            title: 'Kahoot AS',
            price: 40,
            new: true,
            enterPriceMultiple: Math.floor(Math.random() * (50 - 5 +1)) + 5,
            priceEarnings: Math.floor(Math.random() * (5 - 1 +1)) + 1,
            priceSales: Math.floor(Math.random() * (30 - 7 +1)) + 7,
            priceBook: Math.floor(Math.random() * (70 - 7 +1)) + 7,
        },

    ];

    const stockCards = stonks.map((stock) =>
        <Col md={3}><StockCard key={stock.title} data={stock}/></Col>
    );

    const stockTableRows = stonks.map((stock) =>
        <StockTableRow key={stock.title} data={stock}/>
    );

    return (
        <div>
            <Row className="mt-5">
                {stockCards}
            </Row>
            <Table striped bordered hover variant="dark" className="mt-5">
                <thead>
                <tr>
                    <th>Navn</th>
                    <th>EV/EBITDA</th>
                    <th>P/E</th>
                    <th>P/S</th>
                    <th>P/B</th>
                </tr>
                </thead>
                <tbody>
                {stockTableRows}
                </tbody>
            </Table>
        </div>
    );
};