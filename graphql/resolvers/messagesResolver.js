const Message = require("../../models/Message");

module.exports = {
  Mutation: {
    async createMessage(_, { messageInput: { text, username } }) {
      const newMessage = new Message({
        text: text,
        createdAt: new Date().toISOString(),
        createdBy: username,
      });

      const res = await newMessage.save();
      //   console.log(res);
      return {
        id: res.id,
        ...res._doc,
      };
    },
  },
  Query: {
    message: (_, { id }) => {
      console.log(id);
      console.log(Message.findById(id));
    },
  },
};
