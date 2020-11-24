import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ response }) {
    const posts = await Post.all()

    return response.status(200).json(posts)
  }

  public async store({ request, response }) {
    const post = await Post.create(request.only(['title', 'description', 'author']))
    return response.status(200).json(post)
  }

  public async update({ params, request, response }) {
    const post = await Post.find(params.id)

    if (post) {
      post.merge(request.only(['title', 'description', 'author']))
      post.save()
    } else {
      return response.status(400).json({ error: 'Post not found' })
    }

    return response.status(200).json(post)
  }

  public async destroy({ params, response }) {
    const post = await Post.find(params.id)

    if (post) {
      post.delete()
    } else {
      return response.status(400).json({ error: 'Post not found' })
    }

    return response.status(200)
  }
}
