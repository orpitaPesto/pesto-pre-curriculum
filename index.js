const describe = (desc, fn) => {
    console.log(desc)
    fn()
  }
  
  const it = (msg, fn) => describe('  ' + msg, fn)
  
  const matchers = (exp) => ({
    toBe: (asssertion) => {
      if (exp === asssertion) {
        console.log('pass')
        return true
      } else {
        console.log('fail')
        return false
      }
    }
  })
  
  const expect = (exp) => matchers(exp)
  
  function adder(a, b) {
    return a + b 
  }
  
  function subtracter(a, b) {
    return a - b 
  }

  function divider(a, b) {
    return a / b 
  }

  function multiplier(a, b) {
    return a * b 
  }
  
  describe('adder', () => {
    it('adds two numbers', () => {
      const result = adder(1, 2)
      expect(result).toBe(3)
    })
  })

  describe('subtracter', () => {
    it('subtracts two numbers', () => {
      const result = subtracter(1, 2)
      expect(result).toBe(-1)
    })
  })

  describe('multiplier', () => {
    it('multiplies two numbers', () => {
      const result = multiplier(1, 2)
      expect(result).toBe(2)
    })
  })

  describe('divider', () => {
    it('divides two numbers', () => {
      const result = divider(4, 2)
      expect(result).toBe(2)
    })
  })
  
  module.exports = {
    describe,
    expect,
    it,
    matchers
  }