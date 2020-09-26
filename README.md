# Anti-phishing script for free hosting providers
This script intended to protect users from online phishing attacks

Right now script can recognize following fake pages(others will be added soon ❤️):
- [x] IPG gateways
- [x] Instagram
- [x] GMAIL
- [ ] Facebook
- [ ] PUBG
- [ ] Twitter
- [ ] VK

## Setup
> Warning: before downloading script please make sure you have a fresh version of Node.js installed

First install dependencies:
```sh
npm install
or
yarn install
```

Rename `config.ts.example` filename to `config.ts` then Change settings based on your brand on `/src/config.ts` (don't remove double quotes)

create a production build with:
F
```sh
npm run build
or
yarn build
```


## Deploy
First upload `dist/bundle.js` file to your host
then submit the following snippet in `Client Site Advert Control` section of your Admin panel 

```js
<script src="//[YOURDOMAIN]/[UPLOADED_DIR]/bundle.js"></script> 
```

## Credit
Developed by Milad Ahmadi
