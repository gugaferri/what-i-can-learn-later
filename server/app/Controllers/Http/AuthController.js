"use strict"

const User = use("App/Models/User")

class AuthController {
  async login ({ request, auth }) {
    const { name, email, access_key } = request.all()

    const token = await auth.attempt(email, password)
    const user = await User.create({ name, email, access_key })

    return {
      user,
      token
    }
  }
}

module.exports = AuthController
