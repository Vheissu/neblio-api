# neblio-api
A Node.js wrapper API for interacting with a Neblio wallet/daemon and safely exposing RPC calls as endpoints.

## Requirements

All you need is Node.js installed on your server, a Neblio wallet/daemon that is running and love.

To run this in production as a proper service based app, this api comes with support for pm2 out of the box. Make sure you install it globally using `npm install pm2 -g`

## Installation & Setup

Pull this repository down to where you want it to exist on your server. Configure the required environment variables (particularly RPC user and password values) and then enjoy.

A sample env file is provided, you can rename `.env.sample` to `.env` and change the values accordingly. In a production application, you would never use the `.env` file this is only for testing. These environment variables should be populated elsewhere.