// 封装检测数据类型
function getDatatype(data) {
  const dataType = Object.prototype.toString.call(data)
  const dataTypeOptions = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return dataTypeOptions[dataType]
}

function deepCopy(data) {
  let Obj = null
  const str = getDatatype(data)
  if (str == 'array') {
    Obj = []
    for (let i = 0; i < data.length; i++) {
      Obj.push(deepCopy(data[i]))
    }
  } else if (str == 'object') {
    Obj = {}
    for (const i in data) {
      Obj[i] = deepCopy(data[i])
    }
  } else {
    return data
  }
  return Obj
}

export default {
  deepCopy
}
