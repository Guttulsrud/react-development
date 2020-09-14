import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';

export const StockCard = (props) => {
    return (
        <Card className="mb-2">
            <Card.Body>
                <h6>{props.data.title} {props.data.new ? <Badge variant="success">New</Badge> : ''} </h6>
                <h2>{props.data.price.toFixed(1)}</h2>
                <FontAwesomeIcon icon={faChevronDown}/>

            </Card.Body>
        </Card>
    );
};

export const StockTableRow = (props) => {

    return (
        <tr>
            <td>{props.data.title}</td>
            {props.data.enterPriceMultiple < 12
                ? <td><FontAwesomeIcon color="#5cb85c" icon={faCheckCircle}/></td>
                : <td><FontAwesomeIcon color="gray" icon={faCheckCircle}/></td>
            }
            {props.data.priceEarnings < 3
                ? <td><FontAwesomeIcon color="#5cb85c" icon={faCheckCircle}/></td>
                : <td><FontAwesomeIcon color="gray" icon={faCheckCircle}/></td>
            }

            {props.data.priceSales > 10 && props.data.priceSales < 20
                ? <td><FontAwesomeIcon color="#5cb85c" icon={faCheckCircle}/></td>
                : <td><FontAwesomeIcon color="gray" icon={faCheckCircle}/></td>
            }
            {props.data.priceBook < 50
                ? <td><FontAwesomeIcon color="#5cb85c" icon={faCheckCircle}/></td>
                : <td><FontAwesomeIcon color="gray" icon={faCheckCircle}/></td>
            }
        </tr>
    );
};
