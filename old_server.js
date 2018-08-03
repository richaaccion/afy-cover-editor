const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(`mongodb://localhost:27017/graphql_demo`);

const typeDefs = `
	type Query {
		hello(name: String): String!
	}
`;

const resolvers = {
	Query: {
		hello: (_, {name}) => {
			return `Hello ${name || 'World'}`
		}
	}
}

const server = new GraphQLServer({typeDefs, resolvers})

server.start({port: process.env.APP_PORT}, ({port})=> {
	console.log("server stareted at localhost:" + port);
})