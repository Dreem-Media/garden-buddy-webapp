# Garden Buddy

# Development
`npm i`

Starting the Server app
`ng serve -o`

## Deployment

Angular:
`ng build --prod`

## Update API references

`npm install -g ng-openapi-gen`

Save openapi.json file in directory above this

Run this command

`ng-openapi-gen --input ../openapi.json --output src/app/api`