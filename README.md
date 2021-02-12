# neblio-api
A Node.js wrapper API for interacting with a Neblio wallet/daemon and safely exposing RPC calls as endpoints.

## What is this?

If you are wanting to build an app on Neblio, you'll get to a point where you'll need to work with a daemon or wallet, making calls to it and interacting with the blockchain itself. Neblio provide some API endpoints you can already use, this package is for low-level blockchain calls.

## Requirements

All you need is Node.js installed on your server, a Neblio wallet/daemon that is running and love.

To run this in production as a proper service based app, this api comes with support for pm2 out of the box. Make sure you install it globally using `npm install pm2 -g`
## Installation & Setup

Pull this repository down to where you want it to exist on your server. Configure the required environment variables (particularly RPC user and password values) and then enjoy.

A sample env file is provided, you can rename `.env.sample` to `.env` and change the values accordingly. In a production application, you would never use the `.env` file this is only for testing. These environment variables should be populated elsewhere.

## Support my work

All NEBL donations/tips are appreciated: NevXzxMMFxf12vvKhWQuzkgKNiZHQzf8LH