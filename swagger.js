const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Medicals Api',
        description: 'Medicals Api'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);