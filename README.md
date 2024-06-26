﻿# HamoniSolo
 HarmoniSolo MVP Specification

1. Title: HarmoniSolo MVP Specification

2. Architecture

   Illustration:
     





   Description:
     The architecture involves a React-based frontend communicating with a Node.js and Express backend. A Python-based recommendation algorithm processes liked songs data.

3. APIs and Methods

   - API Routes:

     - `/api/songs`
       - `GET`: Returns a list of songs based on user preferences.
       - `POST`: Adds a liked song to the user's profile.

     - `/api/recommendations`
       - `GET`: Returns recommended songs based on liked songs history.

Endpoints/Methods:

     - `class Recommender:`
       - `recommend_songs(user_id)`: Recommends songs based on user history.
       - `get_user_songs(user_id)`: Returns a list of user's liked songs.

3rd Party APIs:
     - [Spotify API](https://developer.spotify.com/documentation/web-api/): To fetch additional details about recommended songs.

4. Data Model

   -Data Model Diagram:
     




   - Description:
     - User table: Stores user details.
     - Song table: Stores song details.
     - Liked songs table: Records songs liked by users.

5. User Stories

   - User Stories:
     1. As a user, I want to see recommended songs based on my liked songs.
     2. As a user, I want to add songs to my liked list.
     3. As a user, I want to view my liked songs history.

6. Mockups

 

   - Description:
     - Mockups include visual representations of the user interface, displaying recommended songs, adding liked songs, and viewing the liked songs history.




