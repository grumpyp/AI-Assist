from flask import Flask

from database.db import db, after_db_init

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://///tmp/test.db'


# startup
def run_app():
    with app.app_context():
        # routes
        from backend.src.views.call import call_blueprint

        app.register_blueprint(call_blueprint, url_prefix='/call')

        db.init_app(app)

        app.app_context().push()

        # create tables only once
        db.create_all()
        db.session.commit()
        after_db_init()

        app.run(host='0.0.0.0', port=4999, debug=True, use_reloader=False)


if __name__ == '__main__':
    run_app()
