
README

Instyled<br/>
Fashion App
Welome to Instyled! A place where you can look through a style feed and chat with others on different looks. Find a style you love and meet the stylist of that outfit. Book a session with the stylist to get started creating your new look! Please enjoy!

Models and Associations

In this application, I have user, stylist, comment, and image model. They are associated in the following way:

A user has many comments
A stylist has many images 
An image has many comments and belongs to stylists
A comment belongs to a user

Getting Started

Fork and clone this repository to your local machine. Before you run the application, make sure you run bundle and npm install first in your terminal to install all the gems required in the Gemfile, then you can start running the program!

Running the application

I've set up the migrations in the db/migrate directory to create the user, stylist, comment, and image. In seeds.js I've also set up some data in this file for you to play around with.

Contributor's Guide


Program Structure

Database connection and files connection are set up in environment file in config/environment.rb You can find database schema and data in db, and models in app/models

