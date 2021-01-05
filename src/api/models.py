from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users' # PARA SOLUCIONAR ERROR DE RELACION
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(60), unique=True, nullable=False)
    first_name = db.Column(db.String(60))
    last_name = db.Column(db.String(120))
    password = db.Column(db.String(80), nullable=False)

    tweet = db.relationship("Tweets")

    def __str__(self):
        # return '<@%r>' % self.username
        return f'@{self.username} ole ole'
        # Este texto aparece cuando hay que insertar dentro de una tabla el id de un usuario en otra tabla
        
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "created_at": self.created_at,
            "update_at": self.updated_at
            
            # do not serialize the password, its a security breach
        }


class Tweets(db.Model):
    __tablename__ = 'tweets'
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    text = db.Column(db.String(400))

    user = db.relationship("Users")
    
    def __str__(self):
        # return '<User %r>' % self.username
        return f'{self.text} de @{self.user.username}'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.username,
            "text": self.text
            # do not serialize the password, its a security breach
        }


class Comments(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    tweet_id = db.Column(db.Integer, ForeignKey('tweets.id'))
    text = db.Column(db.String(400))

    user = db.relationship("Users")
    tweet = db.relationship("Tweets")
    
    def __str__(self):
        # return '<User %r>' % self.username
        return f'{self.tweet.id} <{self.text}> @{self.user.username}'

    def serialize(self):
        return {
            "id": self.id,
            "tweet_id": self.tweet.id,
            "tweet": self.tweet.text,
            "user": self.user.username,
            "text": self.text
            # do not serialize the password, its a security breach
        }


class Likes(db.Model):
    __tablename__ = 'likes'
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=func.now()) # NO APLICA UNA MODIFICACION DE UN LIKE
    deleted_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    tweet_id = db.Column(db.Integer, ForeignKey('tweets.id'))

    user = db.relationship("Users")
    tweet = db.relationship("Tweets")
    
    def __str__(self):
        # return '<User %r>' % self.username
        return f'@{self.user.username}'
       

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user.username,
            "text": self.text
            # do not serialize the password, its a security breach
        }




