import React from "react";
import {List} from 'semantic-ui-react'

export const People = ({people}) => {
    return (
        <List ordered>
            {people.map(person => {
                return (
                    <List.Item key={person.name}>{person.name}</List.Item>
                )
            })}
        </List>
    );
};