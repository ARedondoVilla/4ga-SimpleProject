from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = 'users' # PARA SOLUCIONAR ERROR DE RELACION
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(60), unique=True, nullable=False)
    first_name = db.Column(db.String(60))
    last_name = db.Column(db.String(120))
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)

    tweet = db.relationship("Tweets")

    def __str__(self):
        # return '<@%r>' % self.username
        return f'@{self.username}'
        
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name
            # do not serialize the password, its a security breach
        }


class Tweets(db.Model):
    __tablename__ = 'tweets'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    text = db.Column(db.String(400))

    user = db.relationship("Users")
    
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