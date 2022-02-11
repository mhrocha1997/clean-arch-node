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
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.email) {
      response = {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }

    return response
  }
}
