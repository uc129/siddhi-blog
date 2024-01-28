const PostBox = ({ post }) => {

    let content = post.content;
    if (content.length > 200) {
        content = content.slice(0, 200) + '...'
    }
    return (
        <div className="wrapper">
            <div className="container flex flex-col" >
                <h1 className="text-4xl text-center">{post.title}</h1>

                <div className="flex justify-between">
                    <div className="flex">
                        <p className="text-sm text-gray-500">Published on: {post.dates.initiated}</p>
                        <p className="text-sm text-gray-500">Views: {post.meta.views.length}</p>
                    </div>

                    <div className="flex">
                        <p className="text-sm text-gray-500">Category: {post.category.name}</p>
                        <p className="text-sm text-gray-500">Tags: {post.tags.map((tag) => tag.name)}</p>
                    </div>

                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

                <a href={`/blog/post?id=${post._id}`}> See More</a>

                {/* <div className="flex justify-between">
                    <button className="btn btn-primary" onClick={() => onEdit(post)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => onDelete(post)}>Delete</button>
                </div> */}
            </div>
        </div>
    )

}

export default PostBox