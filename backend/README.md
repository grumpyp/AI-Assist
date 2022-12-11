# Startup

First of all you'd need API-Keys of the `Cohere API` and the `Assembly API`.
You also need to set the `FTP_SERVER`, `FTP_USER` and `FTP_PASSWORD`

### ENV VARIABLES
```
export API_KEY=c9c87868;
export FTP_HOST=yourserver.com;
export FTP_PASSWORD=jupakflsdf;
export FTP_USER=f0b;
export COHERE_API_KEY=XE52rKQg45hsYugR1
```

In case you want to use mock data, you can comment out line 181, 184 in `test.py` and uncomment 182, 188.



### Run

Make sure you got Python > 3.6 installed. Then run the following commands:
```
pip3 install -r requirements.txt
python3 app.py (you have to be in the src folder)
```

