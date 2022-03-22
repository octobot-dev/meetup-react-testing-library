# Example React app for MWD - React Testing Library

## Project structure

This project contains two main folders:
- `meetup-api/` contains the "backend" API used to get the ToDos from the React app. This is implemented using [FastAPI](https://fastapi.tiangolo.com/)
- `meetup-app/` contains the React app and its tests.


## Project setup

### Running the React app

To run the React app, you will need both [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. To install the required dependencies, run `npm install`. Afterwards, you can run `npm start` to start the app in port 3000. Both commands should be run in the `meetup-app` folder.

### Running the API

To run the API the frontend uses, you will need [Python](https://www.python.org/) and [Pip](https://pypi.org/project/pip/) installed. To install the required dependencies, run `pip install -r requirements.txt` (note: if you have both Python 2 and Python 3 in your system, run the command with `pip3`). To start the API, run `uvicorn main:app --reload`. Both commands should be run in the `meetup-api` folder.

## Running the tests

To run the tests, in the `meetup-app` folder, run `npm test`. 