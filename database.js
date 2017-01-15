var DAL = {
  students: [
    {
      firstName: 'שוקי',
      lastName: 'גור',
      phone: '770',
      id: '5770',
      street: 'רבי יהודה הנשיא',
      house: '51',
      city: 'PT',
      bank: '1',
      branch: '2',
      account: '3',
      accountName: 'שוקי',
      colel: '1'
    },
    {
      firstName: 'איתמר',
      lastName: 'ביטון',
      phone: '456',
      id: '7894',
      street: 'מנחם בגין',
      house: '65',
      city: 'PT',
      bank: '5',
      branch: '8',
      account: '78',
      accountName: 'Itamar',
      colel: '1' 
    }
  ],
  recomemds: [
    
  ]
}

var add = function(table, object = {}) {
  var match = DAL[table].filter(function (value) {
      return (value.id === object.id);
    })[0];

    if (match && match.id) {
      return false
    } else {
      DAL[table].push(object);
      return true
    }

}

var remove = function(table, id) {
  DAL[table][id] = undefined;
}

var edit = function(table, id, object) {
  DAL[table][id] = object;
}

module.exports = {
  DB: DAL,
  ADD: add,
  SUB: remove,
  UPD: edit
};