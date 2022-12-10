import inspect

from db import db
import models as models

def init_db():
    db.create_all()
    db.session.commit()

    # Add all the common event listeners.
    for model in db.Model.__subclasses__():
        if inspect.hasattr(model, "auto_update_at"):
            # Automatically update the updated_at column.
            model.auto_update_at(model)
