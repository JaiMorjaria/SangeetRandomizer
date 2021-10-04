import React from "react";
import {List} from 'semantic-ui-react'

export const People = ({people}) => {

    for (let i = people.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [people[i], people[j]] = [people[j], people[i]];
    }
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