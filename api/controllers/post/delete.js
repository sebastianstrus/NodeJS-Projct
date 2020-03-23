module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postId: {
      type: 'string',
      required: true
    }

  },


  exits: {
    invali: {
      description: "Invalid post to delete",

    }

  },


  fn: async function (inputs) {

    const record = await Post.destroy({ id: inputs.postId }).fetch()
    if (record.length == 0) {
      throw ({ nvalid: { error: 'Record does not exist' } })
    }
    return record;

  }


};
