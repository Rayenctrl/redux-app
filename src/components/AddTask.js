import React, {useState} from 'react';
import{useDispatch}from "react-redux";
import{Card,InputGroup,FormControl,Button} from "react-bootstrap";
import{addTask} from "../Redx/ActionTask";

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
  
    const add = () => {
    //   e.preventDefault();
      dispatch(addTask({ text: text, isDone: false, id: Date.now() }));
      setText("");
    };
    
    return (
        <Card bg="Info">
            <Card.Body>
                <h1 className={"text-white"}>To-Do !</h1>
    
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) =>setText(e.target.value)}
                        value={text}
                    />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={add}>Add</Button>
                </InputGroup.Append>
                </InputGroup>
            </Card.Body>
        </Card>
    );
};
export default AddTask;
