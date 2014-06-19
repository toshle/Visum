Ext.define('Visum.model.User', {
  extend: 'Ext.data.Model',
  config: {
    fields: [{
      name: '_id',
      type: 'string'
    }, {
      name: 'id',
      type: 'int'
    }, {
      name: 'username',
      type: 'string'
    }, {
      name: 'age',
      type: 'int'
    }]
  }
});