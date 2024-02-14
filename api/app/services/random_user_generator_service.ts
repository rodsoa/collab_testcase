import env from '#start/env'
import { RandomUsers } from '../interfaces/random_users_interface'

export default class RandomUserGeneratorService {
  async get(options: object = {}): Promise<RandomUsers> {
    let params = ''
    Object.entries(options).forEach(([key, value]) => {
      params += `${key}=${value}&`
    })

    const response = await fetch(`${env.get('RANDOM_USER_API')}?${params}`)
    if (!response.ok) {
      throw new Error('Forsooth, a scourge upon our fetch quest: ' + response.statusText)
    }

    const jsonData: RandomUsers = await response.json()
    return jsonData
  }
}
