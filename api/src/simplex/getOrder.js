import debugLogger from 'debug'
import call from './call'
import {
  simplex
} from '../config'
const debug = debugLogger('calls:getOrder')
export default (reqObject) => {
  debug(reqObject) // todo remove dev item
  return call(reqObject, simplex.orderEP)
}
