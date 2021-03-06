# Changelog

## Frontend

- Create initial filestructure
- Create html for pages:
  - index
  - dashboard
  - profile
- Add dynamic habit description to add habit form
- Create styling pages:
  - index
  - dashboard
  - profile
- Style pages cohesively
  - pick colour theme
  - add background image
- Create responsive navigation

## Backend

[1.0.0] - 2021-07-26 - Poligera & Ridwan Axmed

### Added

- PostgreSQL database setup with defined tables (users and habits) and seed data
- Docker-Compose.yaml file
- Models for User and Habit with crud functionality, complete with db queries
- Three controllers - auth, habit and user with full crud functionality and bcrypt salting/hashing
- server.js file to set up the Express server and utilise the controllers
- index.js file that starts the server
- Middleware for jsonwebtoken which verifies validity of the token to authorize user entry
- .env file with SECRET environment variable used with token verification process
- package.json file with aproppriate dependencies
- Methods allowing user to change their name, email and password
- Patch method to auth.js file for password change requested by user
- updatePassword method in User model
- updateDetails method in User model which changes email and name
- Extra patch request in user.js controller to allow user to change name/email
- Corrected syntax error in Primary Key in the table "users"
- Corrected path error in Docker-Compose, so it works now
- Extra patch request in auth.js controller to allow user to change password

[2.0.0] - 2021-07-27 - Poligera & Ridwan Axmed

### Added

- Updated dependencies in package.json
- Extra table "completions" for habit tracking
- Fixed syntax error in migrations.sql
- Added seed data for "completions" table
- Fixed a typo in Habit model (module.exports)
- Added missing module.exports for Router
- Added "completionDates" property to Habit model (an array of unix timestamps, in seconds) complete with an extra db query to extract those values from "completions" table based on habit_id foreign key
- Added the above to other Habit methods
- Fixed a typo in findById method (returning correct data)
- Removed "streak" attribute from Habit and associated variables
- Updated patch request logic with date conversion and comparison

[2.0.0] - 2021-07-28 - Poligera & Velocima

- Add `GET /users/:email/habit/:id` endpoint
- Add `POST /user/:email/habit/:id/complete` endpoint
- update `DELETE /user/:email/habit/:id/complete/:completionId` endpoint
- Fix `PATCH /auth/:email/password` endpoint
- Fix `PATCH /user/:email` endpoint
- Fix `DELETE /user/:email/habit/:id` endpoint
- Add `GET /user/:email/habit/:id/complete` endpoint
- Add current and best streaks to habit constructor

[2.0.0] - 2021-07-29 - Poligera
- Reformatted completion dates in db as 'YYYY-MM-DD'
- Updated migrations and seeds files accordingly
- Rewrite Habit model to handle the above and make comprehensive habit_frequency and frequency_target checks
- Add completionsCount property (an object) to the Habit prototype so the occurence of every date is counted
- Update isComplete() and markAsComplete methods;
- Added dayjs library as dependency
- Updated currentStreak and bestStreak methods on Habit model

### Testing

- Created test suite for habit end routes
- Created test database

## Misc
