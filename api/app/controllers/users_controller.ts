import RandomUserGeneratorService from '#services/random_user_generator_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  @inject()
  index(ctx: HttpContext, userService: RandomUserGeneratorService) {
    return userService.get(ctx.request.qs())
  }
}
