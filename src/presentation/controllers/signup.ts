import { MissingParamError } from './../errors/missing-param-errors'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    let response: HttpResponse = {
      statusCode: 0,
      body: null
    }
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        response = badRequest(new MissingParamError(field))
      }
    }
    return response
  }
}
