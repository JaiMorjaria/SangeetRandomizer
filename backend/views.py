from flask import Blueprint, jsonify, request
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

@main.route('/people')
def people():
    people_list = Person.query.all()
    people = []

    for person in people_list:
        people.append({'name': person.name})

    return jsonify({'people' : people})