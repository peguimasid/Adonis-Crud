import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }) {
    const users = await User.all()

    return response.status(200).json(users)
  }

  public async store({ request, response }) {
    const user = await User.create(request.only(['name', 'email', 'password']))
    return response.status(200).json(user)
  }

  public async update({ params, request, response }) {
    const user = await User.find(params.id)

    if (user) {
      user.merge(request.only(['name', 'email', 'password']))
      user.save()
    } else {
      return response.status(400).json({ error: 'User not found' })
    }

    return response.status(200).json(user)
  }

  public async destroy({ params, response }) {
    const user = await User.find(params.id)

    if (user) {
      user.delete()
    } else {
      return response.status(400).json({ error: 'User not found' })
    }

    return response.status(200)
  }
}
