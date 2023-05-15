const TEST_CACHE = {

  Inputs() {
    return {
      input1: {
        _Key: 'dit',
        _Value: 'dit saved',
        _Array: ['a', 'b', 'c'],
        _Object: { 'a': 'a', 'b': 'b', 'c': 'c' }
      },
      input2: {
        _Key: 1,
        _Value: 1,
        _Array: [1, 2, 3],
        _Object: { 1: 1, 2: 2, 3: 3 }
      },
      input3: {
        _Key: 1,
        _Value: 1,
        _Array: [1, 2, 3],
        _Object: { 1: '1', 2: '2', 3: '3' }
      }
    }
  },

  saveCache(defaultIs = 'TCache') {
    const Input = this.Inputs()
    for (let key in Input) {

      const _Key = Input[key]._Key;
      const _Value = Input[key]._Value;

      let _Cache
      if (defaultIs === 'TCache') _Cache = TCache.setCacheValue(_Key, _Value)
      else _Cache = PCache.setCacheValue(_Key, _Value)
      if (_Cache && _Cache === _Value) { Logger.log(Test_Constants().TEST_TITLES.setCacheValue) }
    }
  },

  //saved cache must be exist
  getCache(defaultIs = 'TCache') {
    const Input = this.Inputs()
    for (let key in Input) {
      let _Key = Input[key]._Key;
      let _Cache;
      if (defaultIs === 'TCache') _Cache = TCache.getCacheValue(_Key)
      else _Cache = PCache.getCacheValue(_Key)
      if (_Cache) { Logger.log(Test_Constants().TEST_TITLES.getCacheByKey) }
    }
  },


  removeCache(defaultIs = 'TCache') {
    const Input = this.Inputs()
    for (let key in Input) {
      let _Key = Input[key]._Key;
      let _Cache
      if (defaultIs === 'TCache') _Cache = TCache.removeCacheValue(_Key)
      else _Cache = PCache.removeCacheValue(_Key)
      if (_Cache && typeof _Cache == 'object') { Logger.log(Test_Constants().TEST_TITLES.removeCacheByKey) }
    }
  },

  setCacheValues(defaultIs = 'TCache') {
    const Input = this.Inputs()
    for (let key in Input) {
      let _Object = Input[key]._Object;
      let _Cache;
      if (defaultIs === 'TCache') _Cache = TCache.setCacheValues(_Object)
      else _Cache = PCache.setCacheValues(_Object)
      if (_Cache && _Cache.length === Object.keys(_Object).length) {
        Logger.log(Test_Constants().TEST_TITLES.setCacheValues)
      }
    }
  },

  getCacheValues(defaultIs = 'TCache') {
    const Input = this.Inputs()
    for (let key in Input) {
      let _Array = Input[key]._Array;
      let _Cache
      if (defaultIs === 'TCache') { _Cache = TCache.getCacheValues(_Array) }
      else { _Cache = PCache.getCache() }
      if (_Cache && typeof _Cache == 'object') { Logger.log(Test_Constants().TEST_TITLES.getCacheValuesByKeys) }
    }
  },


  removeCaches(defaultIs = 'TCache') {
    const Input = this.Inputs()
    for (let key in Input) {
      let _Array = Input[key]._Array;
      let _Cache;
      if (defaultIs === 'TCache') _Cache = TCache.removeCacheValues(_Array)
      else _Cache = PCache.deleteCache()
      if (_Cache && typeof _Cache == 'object') { Logger.log(Test_Constants().TEST_TITLES.removeCacheByKey) }
    }
  },


}

