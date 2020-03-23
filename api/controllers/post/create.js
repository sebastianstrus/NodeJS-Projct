module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title: {
      description: "Title of post object",
      type: 'string',
      required: true
    },
    postBody: {
      description: "Body of post object",
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs) {

    await Post.create({ title: inputs.title, body: inputs.postBody })
    return;

  }


};
