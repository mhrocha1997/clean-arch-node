import { MissingParamError } from './../errors/missing-param-errors'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    let response: HttpResponse = {
      statusCode: 0,
      body: null
    }

    if (!httpRequest.body.name) {
      response = badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      response = badRequest(new MissingParamError('email'))
    }

    return response
  }
}
