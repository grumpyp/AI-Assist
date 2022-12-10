# -50k-AI-Hackathon
$50k AI Hackathon





## Brainstorming Saturday morning 1 am
![app model high level design](https://content-baer.de/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-09-at-23.54.51.jpeg "app model highlevel design")



The application will be an application for any company with customer support on the phone. Our application enables better control about managing customers with the usage of AI.

Our usecase szenario is the following:

A customer calls our helpdesk and describes the problem to an AI which is just listening and asking questions. So our database will map the user to the current userdata for our customer service staff. Furthermore it will analyze and summarize the problem of the customer. With the summarization of the problem and based on data we have already, a mathematical queueing theory will estimate the time a support member will take to tackle the customers problem. With that feature we will increase the speed of “service rate” and enable faster processing. 

By having a quick summary of the problem, in the future it will be possible to map this problems with already known problems out of our experience. The support member can also already prepare some answer and do a research if possible.

The history of our calls will safe the whole conversation and learn out of it. It will for example take all the entities into our database and give the supervisor an overview about the pain points of our products. We will also analyze the general sentiment of our customers. Furthermore each customer can get treated by their sentiment. Let’s say a customer has called 5 times and his sentiment is quite bad - we could send him a little gift for christmas.

That and many more features will be visible on our dashboard which is mainly used by supervisors.




### Calls

User calls describes problem
Our database maps user with the user so we can identify him
The API summarizes everything (Sentiment, Text, Entities,..)
The API pushes that data into our database and renders it on the frontend for our support member
The queueing theory model will give a perfect match in order to speed up the process and work best with resources
It will take in data from our History to evaluate which tasks take longer and which don’t




Core-Features

### Frontend

History (View):
Table with following columns:


Detailed view of history:


Dashboard (View):
Dashboard Page + Dashboard layout
Following Dashboardlets
A
B
C
Livecalls (View):
Table view with following columns:


Gets live data from backend via websockets
Navbar:
Navbar Component:
Navbar to the left.
Logo on top.
Dashboard -> navigate to dashboard
Livecalls -> navigate to livecalls
History -> navigate to history
Login Page
Create a login page
Authenticate the user at the backend
Store
Authentification Store module
Livecalls store
History store
Dashboard store
Notifcations

### Backend:

Main Fokus auf History und Livecalls Features
History -> Zusammenfassung muss gegeben sein, Entities, Call Data (Zeit, Anrufer usw.)
Livecalls (Problembeschreibung Zusammenfassung, Datenbank Mapping von Userdata, Estimated Time (Das kann für die Zukunft ein Learning Modell sein), Sentiment von Person
wenn Anruf angenommen wird soll ToDo für Kunden und Call mit aufgenommen werden können 
Dashboard -> Modelle über komplette Anrufe
häufige Probleme: Beispiel: Auf Iphone läuft Software nicht flüssig
häufigste Calls um 14:00 Uhr



![database model](https://content-baer.de/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-10-at-00.22.44-1.jpeg "Database model")

