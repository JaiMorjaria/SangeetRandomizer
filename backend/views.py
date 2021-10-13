from re import A
from flask import Blueprint, json, jsonify, request
from werkzeug.utils import redirect
from . import db
from .models import Person

main = Blueprint('main', __name__)

@main.route('/add_person', methods=['POST'])
def add_person():
    person_data = request.get_json()

    new_person = Person(name=person_data['name'])

    db.session.add(new_person)
    db.session.commit()
    return 'Done', 201

@main.route('/people/<string:name>', methods=['DELETE'])
def delete_person(name):
    person = [person for person in people if person['name'] == name]
    people.remove(person[0]['name'])
    return jsonify({'people' : people})

@main.route('/people')
def people():
    people_list = Person.query.all()
    people = [] 

    for person in people_list:
        people.append({'name': person.name})

    return jsonify({'people' : people})

