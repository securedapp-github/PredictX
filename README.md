# PredictX 

This repo contains files for the Project PredictX.

Also Nodejs implementation of ARIMA model for time series analysis and forecasting (Autoregressive Integrated Moving Average)

## Front End 
Reactjs + Google Looker Studio for Graphs

Modules : Dashboard, State Profile, Districts Profile 

To run on local: Go into frontend folder: Do npm i -> npm start

## Backend 
Nodejs Microservice Architecture for digitisation of FIR records

Processing of data with prediction using ARIMA model 

Mysql to store all data and prediction algorithm

To run on local: Go into prediction folder: Do npm i -> node prediction_final.js

Currently the project is using excel sheets for data storage and we are using Google Looker studio for data visualisation which we will shift to Mysql with Recharts and React-chartjs-2 for data visualisation in upcoming version.
