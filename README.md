# Anti-phishing script for free hosting providers
This script is intended to protect users from online phishing attacks

Right now script can recognize following fake pages(others will be added soon ❤️):
- [x] IPG gateways
- [x] Instagram
- [x] GMAIL
- [x] Outlook
- [x] Facebook
- [ ] PUBG
- [ ] Twitter
- [ ] VK
## Preview
![Preview](https://github.com/milad00ahmadi/milad00ahmadi/blob/freehost-anti-phishing/screenshot.png?raw=true)

## Setup
> Warning: before downloading script please make sure you have a fresh version of Node.js installed

install dependencies:
```sh
npm install
or
yarn install
```

rename `.env.example` filename to `.env` and change settings based on you're desired values

create a production build with:

```sh
npm run build
or
yarn build
```


## Deploy
Upload `dist/bundle.[contenthash].js` file to your website(you can see a preview of the warning modal in index.html)
then submit the following snippet in `Client Site Advert Control` section of your Admin panel 

```js
<script src="//[YOURDOMAIN]/[UPLOADED_DIR]/bundle.[contenthash].js"></script> 
```

## Credit
Developed by Milad Ahmadi
