import Route from '@ioc:Adonis/Core/Route'

Route.get('posts', 'PostsController.index')
Route.post('posts', 'PostsController.store')
Route.put('posts/:id', 'PostsController.update')
Route.delete('posts/:id', 'PostsController.destroy')
