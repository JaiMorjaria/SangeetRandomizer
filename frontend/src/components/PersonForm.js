import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const PersonForm = ({onNewPerson}) => {
    const [name, setName] = useState("");
    return (
        <Form>
            <Form.Field>
                <Input
                    placeholder="New person"
                    value={name}
                    onChange ={e => setName(e.target.value)}
                >
                </Input>
            </Form.Field>
            <Form.Field>
                <Button
                onClick={async () => {
                const person = { name };
                const response = await fetch("/add_person", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(person)
                });

                if (response.ok) {
                console.log("response worked!");
                onNewPerson(person);
                setName("");
            }
          }}
        >
          submit
        </Button>
      </Form.Field>
        </Form>
    )
}
