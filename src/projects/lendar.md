---
title: "Lendar"
desc: "An events-job matching portal that allows job seeker to filter job search based on the days that they are available. (Still in prototype stage - click for more information)"
priority: 7
effort-days: 20
website: "https://lendar-prototype.herokuapp.com/"
source-code: "https://github.com/Qwetuo/project1-week4"
tags: ["Javascript", "Node.JS", "React","MongoDB","REST API"]
---
### Idea
After experiencing the inefficiency of having to look for events (short/few days) jobs the traditional way - browsing through hundreds of postings on each portal (such as Gumtree, Fastjobs, FB groups...) just to find one or two that is suitable.

Lendar was created as a solution to facilitate the job-seeking process by 
* filtering jobs that match availability (dates required for employer and dates available for particular user)
* allowing them to simply 'swipe' left to reject or right to accept (much like tinder but for matching events jobs with the casual part-time labour market)

As a job seeker, sign up, tell the system the days that you are free for the next 2 months and it will match up with events available. So everytime you go into the app, you can review any new jobs that matches your profile, if interested, simply swipe right to apply, if uninterested, swipe left and never see the post again. 

### Prototype Scope (Current)
The app started out as a front-end REACT course work for my web development boot camp and I am still in the process of integrating it with my RESTful web services API written [here](https://github.com/Qwetuo/project2-week7) for my second course work. \
For now, you can still head over to https://lendar-prototype.herokuapp.com/ and check out the user interfaces created in mind for the 2 types of user, Employer and Employee (click on the Login button on the Navigation Bar and then the blue button "click here to check out a prototype UI instead").


### Created with
NodeJS | REACT | Semantic UI React | React Infinite Calendar | Express | MongoDB (on Heroku mLab) | TDD practice | and automated tests with Jest | Circle CI | Swagger UI | mongoose | passport-jwt