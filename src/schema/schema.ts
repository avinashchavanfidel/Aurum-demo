const graphql = require('graphql');
import  _  from 'lodash';
import axios from 'axios'
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
    
} = graphql;

var users=[];

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: ( ) => ({
        phone:{ type: GraphQLString },
        username:{ type: GraphQLString },
        email:{ type: GraphQLString }
    })
});


const getUsers = async () => {
  return await axios.get('https://randomuser.me/api/')
  }

 getUsers().then(
     response=>{
     users=response.data.results;
     })

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
         users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users;
            }
        }
    }
});

module.exports.usersData = getUsers;
module.exports.RootQuery = new GraphQLSchema({
    query: RootQuery
});
