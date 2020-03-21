module.exports = async function (req, res) {
    console.log("This route shows home page for posts")

    const allPosts = await Post.find()
    res.view('pages/home',
        { allPosts }
    )
    // res.end()
}