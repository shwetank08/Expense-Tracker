import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import "../App.css"

const List = ({item, handleDelete}) => {
    return(
        <>
        <ListGroup className="alert-success">
        {
            item.map((items,index)=>(
                <ListGroupItem key={items.id} className="text-dark border border-dark justify-content-between List"><b>
                {items.name} - ${items.amount}
                <Button type="submit" variant="outline-danger" style={{float: 'right'}} className="text-uppercase" onClick={()=>(handleDelete(index))}>
                    Delete
                </Button>
                </b>
                </ListGroupItem>
            ))
        }
        </ListGroup>
        </>
    );
}
export default List;