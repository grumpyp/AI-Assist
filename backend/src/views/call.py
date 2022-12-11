from flask import Blueprint, request
from database.models.call import Call
call_blueprint = Blueprint('call', __name__)


@call_blueprint.route('/list')
def all_calls():
    calls = [call.to_dict() for call in Call.query.all()]
    return calls

@call_blueprint.route('<call_id>')
def filter_by_id(call_id):
    call = Call.query.filter_by(id=call_id).first().to_dict()
    return call

@call_blueprint.route('/update', methods=['POST'])
def insert():
    if request.method == "POST":
        call_id = request.json.get('id')
        call = Call.query.filter_by(id=call_id).first()
        for key, value in request.json.items():
            try:
                setattr(call, key, value)
            except AttributeError:
                pass
        call.save()
        call = Call.query.filter_by(id=call_id).first()
        return {"success": call.to_dict()}
    else:
        return {"error": "invalid request"}
