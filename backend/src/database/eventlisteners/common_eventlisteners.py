from datetime import datetime
from sqlalchemy import event


def auto_update_at(model):
    @event.listens_for(model, "before_update")
    def _before_update(mapper, connection, target):
        target.updated_at = datetime.utcnow()
