"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

import datetime

from flask import Flask, request, jsonify, url_for, Blueprint, abort
from api.models import db, Users, Tweets, Comments, Likes
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/users', methods=['GET'])
def get_all_users():

    newList = []

    for user in Users.query.filter_by(deleted_at=None).all():
        newList.append(user.serialize())

    return jsonify(newList), 200


@api.route('/users/<int:id>', methods=['GET'])
def get_one_user(id):

    user = Users.query.filter_by(id=id, deleted_at=None).first()

    if not user:
        abort(404)
        
    return jsonify(user.serialize()), 200


@api.route('/users', methods=['POST'])
def create_user():

    # SIN VALIDACION DE DATOS

    # payload= request.get_json()
    # user = Users(**payload)
    
    # db.session.add(user)
    # db.session.commit()

    # return jsonify(user.serialize()), 201

    # CON VALIDACION DE DATOS

    payload= request.get_json()

    required = ['email', 'username', 'password']

    types = { 
        'email': str, 
        'username': str,
        'password': str
    }

    for key, value in payload.items():
        if key in types and not isinstance(value, types[key]):
            abort(400, f"{key} is not {types[key]}")
    
    for field in required:
        if field not in payload or payload[field] is None:
            abort(400)

    user = Users(**payload)
    
    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 201


@api.route("/users/<int:id>", methods =["DELETE"])
def delete_user(id):
    
    # BORRADO DE LA BASE DE DATOS (NO RECOMENDADO)

    # user = Users.query.get(id)

    # if not user:
    #     abort(404)

    # data = user.serialize()

    # db.session.delete(user)
    # db.session.commit()

    # return jsonify(data), 200

    # BORRADO LOGICO (RECOMENDADO, NO SE ELIMINA NINGUN DATO DE LA BASE DE DATOS)

    user = Users.query.filter_by(id=id, deleted_at=None).first()

    if not user:
        abort(404)

    user.deleted_at = datetime.datetime.utcnow()

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 200