const { gql } = require('apollo-server-express');
const User = require('./models/user').Users;

const typeDefs = gql `
   type User {
     id: ID!
     email: String!
     phone: String!
     name: String!
     posts: String!
     avatar: String!
     parentLogin: String!
     comments: String!
   }
   type Query {
     getUsers: [User]
     getUser(id: ID!): User
   }
   type Mutation {
     addUser(id: ID!, email: String!, phone: String!, name: String!, posts: String, avatar: String!, parentLogin: String, comments: String): User
   }
`;

const resolvers = {
  Query: {
    getUsers: (parent, args) => {
      return User.find({});
    },
    getUser: (parent, args) => {
      return User.findById(args.id);
    }
  },

  Mutation: {
    async addUser(parent, args, context, info) {
      const user = new User({
        id: args.id,
        email: args.email,
        phone: args.phone,
        name: args.name,
        posts: args.posts,
        avatar: args.avatar,
        parentLogin: args.parentLogin,
        comments: args.comments,     
      })
      await user.save()
      return user
    }
  },
}

module.exports = {typeDefs, resolvers}