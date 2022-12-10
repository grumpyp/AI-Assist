from flask import Blueprint
from database.models.call import Call

call_blueprint = Blueprint('call', __name__)


@call_blueprint.route('/')
def all_calls():
    calls = Call.query.all()
    return calls

@call_blueprint.route('<int:call_id>')
def filter_by_id(**kwargs):
    call = Call.filter_by(id=call_id).first()
    return call

@call_blueprint.route('/insert')
def insert():
    call = Call(id=2)
    return "inserted"
