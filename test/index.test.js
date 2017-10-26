/* eslint-env node, mocha */
// object-completion-progress test
const { expect } = require('chai')
const progress = require('../index')
const dummy = require('./dummy')
const dummyNested = require('./dummy-nested')

const validateFileds = [
  'balance',
  'age',
  'eyeColor',
  'name',
  'gender',
  'company',
  'email',
  'phone',
  'address',
  'about',
  'registered',
  'latitude',
  'longitude',
  'friends'
]

const nestedFileds = [
  'isActive',
  'balance',
  'picture',
  'age',
  'eyeColor',
  'name',
  'gender',
  'company',
  'email',
  'more',
  'more.phone',
  'more.address',
  'more.about',
  'more.registered',
  'more.location.latitude',
  'more.location.longitude'
]

describe('Object completion progress', () => {
  describe('Plain object', () => {
    it('Average fix 3', () => {
      let { avg } = progress(validateFileds, dummy, 3)
      expect(avg).to.be.equal(0.643)
    })

    it('Average fix 1', () => {
      let { avg } = progress(validateFileds, dummy, 1)
      expect(avg).to.be.equal(0.6)
    })

    it('Valid Count', () => {
      let { count } = progress(validateFileds, dummy, 1)
      expect(count).to.be.equal(9)
    })
  })

  describe('Nested object', () => {
    it('Average fix 2', () => {
      let { avg } = progress(nestedFileds, dummyNested, 2)
      expect(avg).to.be.equal(0.75)
    })

    it('Average fix 1', () => {
      let { avg } = progress(nestedFileds, dummyNested, 1)
      expect(avg).to.be.equal(0.8)
    })

    it('Valid Count', () => {
      let { count } = progress(nestedFileds, dummyNested, 1)
      expect(count).to.be.equal(12)
    })
  })

  describe('Empty Data', () => {
    it('Empty fiels', () => {
      let { count } = progress([], {}, 1)
      expect(count).to.be.equal(0)
    })
  })
})
