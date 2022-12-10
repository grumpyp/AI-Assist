from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def after_db_init():
    # Add all the common event listeners.
    for model in db.Model.__subclasses__():
        if hasattr(model, "auto_update_at"):
            # Automatically update the updated_at column.
            model.auto_update_at(model)
