# Anti-phishing script for free hosting providers
This script intended to protect users from online phishing attacks

Right now this script can recognize following fake pages(others will be added soon ❤️):
- [x] IPG gateways
- [x] Instagram
- [ ] GMAIL
- [ ] Facebook
- [ ] PUBG
- [ ] Twitter
- [ ] VK

## Setup
First install dependencies:

```sh
npm install
or
yarn install
```

To create a production build:

```sh
npm run build
```

Change settings on `/src/config.ts`

## Deploy
first Upload `dist/bundle.js` file to your host
then submit the following snippet in `Client Site Advert Control` section of your Admin panel 

```js
<script src="//[YOURDOMAIN]/[UPLOADED_DIR]/bundle.js"></script> 
```

## Credit
Developed by Milad Ahmadi
