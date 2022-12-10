from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Call(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    def __repr__(self):
        return '<User %r>' % self.id
