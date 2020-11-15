import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {ListGroup,Button}from 'react-bootstrap';
import {deletTask,chktask} from "../Redx/ActionTask"
import EditItem from "./EditItem"

const ListTask = () => {
    const Task = useSelector((state) => state.listTask);
    const dispatch = useDispatch()

    return (
        <ListGroup>
        {Task.map((item,key)=>(
            <ListGroup.Item
            key={key}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(chktask(item.id))}
              >
                {item.isDone ? "inDone" : "isDone"}
              </Button>
              <EditItem Item={item} />
              <Button
                variant="danger"
                onClick={() => dispatch(deletTask(item.id))}
              >
                Delete
              </Button>
            </div>
            <p style={{ margin: "0px" }} className={item.isDone ? "check" : ""}>
              {item.text}
            </p>
          </ListGroup.Item>
        )
      )}
    </ListGroup>
        )}              

export default ListTask
