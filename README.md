##Init barbone 1 TOK  

###On production:  

**Install PM2 globally**  

`npm install pm2 -g`

**Install node packages**  

`nmp install`

**Start using PM2**  

`pm2 start npm -- start`

**stop npm PM2 instance**  
`pm2 stop npm`

###On dev environment:  

**Install node packages**  
`nmp install`

**using nodemon on dev**  

`npm run dev`

###curl examples  

```bash
curl -X POST -H "Content-Type:application/json" http://localhost:3001/messages -d '{"text":"Hi again, World"}'
curl -X DELETE http://localhost:3001/messages/1
curl -X DELETE http://localhost:3001/session/1
curl -X GET http://localhost:3001/session/1
curl -X GET http://localhost:3001/session
curl --location --request GET 'http://localhost:3001/session/geterror' --header 'MY_HEADER_KEY: my_key_12345' --data-urlencode 'MYHASH=imhash23ef33343f4343f434365676fde'
curl --location --request GET 'http://localhost:3001/session/geterror'
```

###Ref  
- `pm2-use-npm-to-start-your-app`
- `node-express-server-rest-api`