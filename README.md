# Query-Search-Tool-Delaget

##### Tags: `React.js` `Semantic UI` `HTML` `CSS` `JavaScript` `API Data Processing` `Hooks` `Pagination`

# Yelpy

Developed a Query Seearch Tool for Delaget. This is an React Single Page application that integrates  API Data fetching using GET and POST Hook methods. It was created in a span of 3 months. 

## Table of Contents

- [Yelpy](#yelpy)
  - [Table of Contents](#table-of-contents)
  - [Setup/Installation 🏗](#setupinstallation-)
  - [Yelp API](#yelp-api)
    - [Network](#network)
  - [Database](#database)
    - [Schema](#schema)
  - [Project Demo Features](#project-demo-features)
    - [API Data Presentation + Animations](#api-data-presentation--animations)
    - [User Auth + Group Chat](#user-auth--group-chat)
    - [MapKit + Image Upload](#mapkit--image-upload)
  - [Built With](#built-with)
  - [Authors](#authors)

## Setup/Installation 🏗


1. MacOS (for running Xcode)
1. Download and install [Xcode](https://developer.apple.com/xcode/)
1. Open `Yelpy.xcworkspace` and run it

## Yelp API

We used [**Parse**](https://parseplatform.org/) (hosted on [**Back4app**](https://www.back4app.com/)) as our backend to handle login/register from the iOS app and also the group chat capabilities between users.

[**Yelp's Fusion API**](https://www.yelp.com/fusion) was used to gather data from businesses.


### Network

- `POST` /search – retrieve businesses from a given search query in SF


## Project Demo Features

Below are the following features that are capable for the app:


### API Data Presentation + Animations

- Load data from Yelp API + Search Bar
	- <img src="https://i.imgur.com/SEyigmC.gif" height=400>

- Animations using [Lottie](https://airbnb.io/lottie/#/) and [SkeletonView](https://github.com/Juanpe/SkeletonView)
	- <img src="https://imgur.com/EJGYjhl.gif" height=400>

### User Auth + Group Chat

- Login/Logout
- Messaging/Chatting capabilities
- Save messages using [Parse Server](https://parseplatform.org/)
	- <img src="https://imgur.com/vhH5dkG.gif" height=400>

### MapKit + Image Upload

- Show business in Map
- Upload image to Map Pin
	- <img src="https://imgur.com/Npz2m1A.gif" height=400>


## Built With

- [Yelp Fusion API](https://www.yelp.com/fusion)
- [Lottie](https://airbnb.io/lottie/#/)
- [SkeletonView](https://github.com/Juanpe/SkeletonView)
- [Parse Server](https://parseplatform.org/)
- [Heroku (hosting of Parse Server)](https://heroku.com)
- Apple MapKit


## Authors

- **Francisco Lira** - [Frankie-Lira](https://github.com/frankie-lira)
  - Project Lead
  - Initial design/planning
  - MVC Architecture design + implementation
  - Yelp API Integration
  - Parse + MongoDB Integration
  - Messaging/Chat feature
  - Search capabilities
  - MapKit Integration
  - Image Upload capability
  - AutoLayout
  - Lottie Animation Integration
  - SkeletonView Integration
  - Messaging/Chat feature
 
