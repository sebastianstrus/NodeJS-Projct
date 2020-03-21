module.exports = {
    posts: async function (req, res) {
        try {
            const posts = await Post.find()
            res.send(posts)
        } catch (err) {
            res.serverError(err.toString())
        }
        // Post.find().exec(function (err, posts) {
        //     if (err) {
        //         return res.serverError(err.toString())
        //     }
        //     res.send(posts)
        // })
    },


    create: function (req, res) {
        const title = req.body.title
        const postBody = req.body.postBody
        sails.log.debug("My title: " + title)
        sails.log.debug("My body: " + postBody)

        Post.create({ title: title, body: postBody }).exec(function (err) {
            if (err) {
                return res.serverError(err.toString())
            }

            console.log("Finished creating Post object")
            return res.end()
        })

    },

    findById: function (req, res) {
        const postId = req.param('postId')

        const filteredPosts = allPosts.filter(p => { return p.id == postId })
        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send('Feiled to find post by id: ' + postId)
        }
    },

    delete: async function (req, res) {
        const postId = req.param('postId')
        await Post.destroy({ id: postId })
        res.send('Finished deleting post')

    }
}