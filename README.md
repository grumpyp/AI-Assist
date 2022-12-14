If you want to check out the how to start the the apps, checkout backend and frontend readmes.

## Short Video
[![Watch the video](https://hackathon.content-baer.de/AI%20Assist%20Logo.png)](https://www.youtube.com/watch?v=gJvXEWb4vwA)

## Slogan
AI-powered customer support for a smarter, more efficient experience

## Company - Description
At AI-Assist We use advanced artificial intelligence technology to provide expert customer support services. Our AI-powered helpdesk verifies customer identities, collects and stores user data, and provides personalized support options. With AI Assist, your customers will enjoy a faster, more efficient support experience, and your business will benefit from valuable insights and improved performance. Try AI Assist today and see the difference for yourself.

## Inspiration
We were brainstorming about several projects for example: An AI Helper for people who can't read on write. This would be a good usecase for 3rd world-countries. In the end we decided to build an AI Assist for callcenters as we are annoyed to get useless support and waiting for hours in queues. 

Our AI Assists uses "queue-theory" to match our staff with calls which are best to work on to reduce waiting time for all. Furthermore it helps agents to give better support. It allows managers and supervisors to find critical pain point of products but also to give feedback about general support success.


## What it does
The software is basically a dashboard which has 3 different views. The calls view is the view of all incoming calls. The incoming calls are started by a bot which asks for a problem and the customerid to identify and map the customer to our platform. While the helpdesk staff is able to pick their best-match our software also proposes help for them. **It matches problems described by the customers to our FAQ's using the Cohere API.** Furthermore it also references to our problem database to make answering easy for the agent. 

The software database model is pretty big. **We use mock data to fill in some fields but also work with the Assembly AI API.** We recorded some examples which are automatically deployed to a FTP server and sent to the API to give feedback about the clients problem. It provides also the highlights, the name of the customer, the customerid to map our customer database and more.

On the dashboard view, managers and supervisors can get critical business information. The software is also able to give a general overview of the sentiment of our clients. This will be a key factor to keep the business running and optimize critical structures. 

__A little example: Agents have more than 50 calls a day nowadays, they don't really have the time nor the energy to think about common problems. Our AI does that for you. We summarize everything and point you to crucial problems__

In the history view, agents can check their history of calls. It also provides additional information to supervisors. They should be able to check team success and other details.

## What it will do
It will verify customer identities quickly and accurately, collect and store user data for personalized support, provide options for routing calls to the appropriate department or employee, offer a way for customers to provide additional information or feedback during the call, allow customers to request a callback or leave a voicemail, record calls for quality assurance or compliance purposes, analyze data using advanced APIs and algorithms, match calls to employees based on their performance metrics, provide insights and recommendations based on data analysis, and improve accuracy and reliability over time through machine learning.

## How we built it
Our database model is build with SQLalchemy based on Flask. Our backend also relies on Python and Flask. We use React with Typescript in our Frontend. The voice data is uploaded to as sever via FTP.

## Challenges we ran into
We started with a pretty simple database model which then grew really fast. The relationship mapping brought us to some challenges. Another challenging part was the serialization of our database to json as we didn't use any module for that. 

The challenging part of the frontend was to build a scalable architecture. 
Another important key is time management: some planning is nice but you're never know which little bug robs you several hours to fix it!

## Accomplishments that we're proud of
Definitly our database model! We also like the outcome of our idea brainstorming as it tackles a real life problem!
![AI Assist DB Model](https://hackathon.content-baer.de/ER%20Diagramm%20AI%20Assist.png)

## What we learned
* Cohere API
* Assembly API
* SQLAlchemy
* Database modeling
* React/React Redux and Material Ui

## What's next for AI Assist
* In-depth market research, do potential customer interviews, and competitive analysis.
* Write a business plan and greater pitch to outline our product (feature analysis,...), target market, financial projections. Potentially find investors and business partners.
* Clean our code and develop an MVP


## Brainstorming Saturday morning 1 am
![app model high level design](https://content-baer.de/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-09-at-23.54.51.jpeg "app model highlevel design")



The application will be an application for any company with customer support on the phone. Our application enables better control about managing customers with the usage of AI.

Our usecase szenario is the following:

A customer calls our helpdesk and describes the problem to an AI which is just listening and asking questions. So our database will map the user to the current userdata for our customer service staff. Furthermore it will analyze and summarize the problem of the customer. With the summarization of the problem and based on data we have already, a mathematical queueing theory will estimate the time a support member will take to tackle the customers problem. With that feature we will increase the speed of ???service rate??? and enable faster processing. 

By having a quick summary of the problem, in the future it will be possible to map this problems with already known problems out of our experience. The support member can also already prepare some answer and do a research if possible.

The history of our calls will safe the whole conversation and learn out of it. It will for example take all the entities into our database and give the supervisor an overview about the pain points of our products. We will also analyze the general sentiment of our customers. Furthermore each customer can get treated by their sentiment. Let???s say a customer has called 5 times and his sentiment is quite bad - we could send him a little gift for christmas.

That and many more features will be visible on our dashboard which is mainly used by supervisors.




### Calls

User calls describes problem
Our database maps user with the user so we can identify him
The API summarizes everything (Sentiment, Text, Entities,..)
The API pushes that data into our database and renders it on the frontend for our support member
The queueing theory model will give a perfect match in order to speed up the process and work best with resources
It will take in data from our History to evaluate which tasks take longer and which don???t




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
Livecalls (Problembeschreibung Zusammenfassung, Datenbank Mapping von Userdata, Estimated Time (Das kann f??r die Zukunft ein Learning Modell sein), Sentiment von Person
wenn Anruf angenommen wird soll ToDo f??r Kunden und Call mit aufgenommen werden k??nnen 
Dashboard -> Modelle ??ber komplette Anrufe
h??ufige Probleme: Beispiel: Auf Iphone l??uft Software nicht fl??ssig
h??ufigste Calls um 14:00 Uhr



![database model](https://content-baer.de/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-10-at-00.22.44-1.jpeg "Database model")

# Contact the Creators
[Patrick Gerard (Devops Engineer)](https://www.linkedin.com/in/patrick-gerard-konstanz/)
[Julius Lipp (Software Engineer)](https://www.linkedin.com/in/julius-lipp/)
