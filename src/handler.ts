import * as fs from 'fs'
import { Context, Handler } from 'aws-lambda'

const html = fs.readFileSync('dist/index.html', 'utf-8')

export const handler: Handler = async (_: any, __: Context): Promise<any> => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: html
  }
}
