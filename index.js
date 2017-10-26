'use strict'

const get = require('lodash/get')
const isEmpty = require('lodash/isEmpty')
const isNumber = require('lodash/isNumber')
const isBoolean = require('lodash/isBoolean')

/**
 * calculate object completion average
 * @param {array} validateFileds
 * @param {object} doc
 * @param {number} presicion
 * @return {object}
 */
module.exports = function (validateFileds, doc, presicion = 5) {
  let count = validateFileds.reduce(function (sum, el) {
    let item = get(doc, el, undefined)
    if (isNumber(item)) return sum + 1
    if (isBoolean(item)) return sum + 1
    return isEmpty(item) ? sum : sum + 1
  }, 0)

  let avg = parseFloat(
    (count / validateFileds.length).toFixed(presicion)
  )

  avg = Number.isNaN(avg) ? 0 : avg

  return {avg, count}
}
