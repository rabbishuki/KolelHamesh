var DAL = {
  students: [
    {
      firstName: 'Shuki',
      lastName: 'Gur',
      phone: '770',
      id: '5770',
      street: 'Rabbi Yehuda Hanassi',
      house: '51',
      city: 'PT',
      bank: '1',
      branch: '2',
      account: '3',
      accountName: 'Shuki',
      colel: '1'
    },
    {
      firstName: 'Itamar',
      lastName: 'Bitton',
      phone: '456',
      id: '7894',
      street: 'Menachem Begin',
      house: '65',
      city: 'PT',
      bank: '5',
      branch: '8',
      account: '78',
      accountName: 'Itamar',
      colel: '1' 
    },
    {
      firstName: null,
      lastName: null,
      phone: null,
      id: null,
      street: null,
      house: null,
      city: null,
      bank: null,
      branch: null,
      account: null,
      accountName: null,
      colel: null
    }
  ],
  recomemds: [
    
  ]
}

var add = function(table, id, object) {
  DAL[table][id] = object;
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