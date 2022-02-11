import { MissingParamError } from './../errors/missing-param-errors'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    let response: HttpResponse = {
      statusCode: 0,
      body: null
    }

    if (!httpRequest.body.name) {
      response = {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      response = {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }

    return response
  }
}
