angular.module('starter.services', [])

.factory('Signals', function() {
  // Might use a resource here that returns a JSON array

  var signals = [{
    id: 0,
    type: 'hand',
    subType: 'search',
    name: 'Assistance Required',
    action: 'One arm waved to and fro above the head',
    meaning: 'The lifeguard in the water needs further assistance. This may be \
      due to a badly panicking patient, , multiple patients or an injury to the \
      lifeguard sustained in the response. Backup by rescue craft or other \
      swimmers is required immediately.',
    image: 'img/hand-signals/assistance-required.jpg'
  }, {
    id: 1,
    type: 'hand',
    subType: 'search',
    name: 'Submerged patient missing',
    action: 'Both arms raised to form a cross above the head',
    meaning: 'This is the most serious signal of all. A swimmer is missing and \
      presumed submerged. Other lifeguards on shore or the pool deck should \
      immediately fix the position of the lifeguard and initiate an appropriate \
      response.',
    image: 'img/hand-signals/patient-missing.jpg'
  }, {
    id: 2,
    type: 'hand',
    subType: 'search',
    name: 'All clear/okay',
    action: 'Touch the middle of the head with the fingertips of one hand',
    meaning: 'The lifeguard is indicating that no help is required in \
      performing the rescue and that the patient is stable. However, other \
      lifeguards should continue to observe and monitor the situation as the \
      situation can deteriorate',
    image: 'img/hand-signals/all-clear.jpg'
  }, {
    id: 3,
    type: 'hand',
    subType: 'search',
    name: 'Pick up patient',
    action: 'One arm waved in a circular manner above the head and the other \
      arm held parallel to the water’s edge and horizontal to the ground.',
    meaning: 'This signal indicates that swimmers are in need of rescue. Once \
      the signal is acknowledged direct the lifeguard to the swimmers',
    image: 'img/hand-signals/pick-up-patient.jpg'
  }, {
    id: 4,
    type: 'hand',
    subType: 'direction',
    name: 'Proceed away from shore',
    action: 'Two arms held vertically above the head',
    meaning: 'The lifeguard in the water should move further out to sea or \
      away from the pool deck from where the lifeguard giving the signal is \
      standing',
    image: 'img/hand-signals/proceed-away.jpg'
  }, {
    id: 5,
    type: 'hand',
    subType: 'direction',
    name: 'Proceed towards shore',
    action: 'One arm held vertically above the head',
    meaning: 'The lifeguard in the water should move towards the shore or \
      closer to the pool deck towards where the lifeguard giving the signal is \
      standing',
    image: 'img/hand-signals/proceed-in.jpg'
  }, {
    id: 6,
    type: 'hand',
    subType: 'direction',
    name: 'Proceed left',
    action: 'One arm held parallel to the ground and pointed in the required \
      direction (left)',
    meaning: 'The lifeguard in the water should move in the direction \
      indicated (left)',
    image: 'img/hand-signals/proceed-left.jpg'
  }, {
    id: 7,
    type: 'hand',
    subType: 'direction',
    name: 'Proceed right',
    action: 'One arm held parallel to the ground and pointed in the required \
      direction (right)',
    meaning: 'The lifeguard in the water should move in the direction \
      indicated (right)',
    image: 'img/hand-signals/proceed-right.jpg'
  }, {
    id: 8,
    type: 'flag',
    subType: '',
    name: 'Proceed further out',
    action: 'Two flags held vertically above the head',
    meaning: 'The lifeguard in the water should move further out to sea or \
      away from the pool deck from where the lifeguard giving the signal is \
      standing',
    image: 'img/flag-signals/proceed-out.jpg'
  }, {
    id: 9,
    type: 'flag',
    subType: '',
    name: 'Proceed towards shore',
    action: 'One flag held vertically above the head',
    meaning: 'The lifeguard in the water should move towards the shore or \
      closer to the pool deck towards where the lifeguard giving the signal is \
      standing',
    image: 'img/flag-signals/return.jpg'
  }, {
    id: 10,
    type: 'flag',
    subType: '',
    name: 'Proceed right',
    action: 'One flag held parallel to the ground and pointed in the required \
      direction (right)',
    meaning: 'The lifeguard in the water should move in the direction \
      indicated (right)',
    image: 'img/flag-signals/proceed-right.jpg'
  }, {
    id: 11,
    type: 'flag',
    subType: '',
    name: 'Pick up swimmers right',
    action: 'One flag waved in a circular manner above the head and the other \
      flag held parallel to the water’s edge and horizontal to the ground.',
    meaning: 'This signal indicates that swimmers are in need of rescue. Once \
      the signal is acknowledged direct the lifeguard to the swimmers',
    image: 'img/flag-signals/pick-up-swimmers-right.jpg'
  }, {
    id: 12,
    type: 'flag',
    subType: '',
    name: 'Remain stationary',
    action: 'Two flags held parallel to the ground',
    meaning: 'The lifeguard in the water should remain stationary in the water.',
    image: 'img/flag-signals/remain-stationary.jpg'
  }, {
    id: 13,
    type: 'flag',
    subType: '',
    name: 'Adjust bouys',
    action: 'One flag held 45 degrees above the horizontal and the other flag held \
      held 45 degrees below the horizontal. Flags are moved with an alternating \
      movement.',
    meaning: 'The lifeguard in the water should adjust the bouys.',
    image: 'img/flag-signals/adjust-bouys.jpg'
  }, {
    id: 14,
    type: 'flag',
    subType: '',
    name: 'Pick up bouys',
    action: 'Both flags are raised up and down 45 degrees relative to the \
      horizontal.',
    meaning: 'The lifeguard in the water should return with the bouys.',
    image: 'img/flag-signals/pick-up-bouys.jpg'
  }, {
    id: 15,
    type: 'flag',
    subType: '',
    name: 'Attract attention',
    action: 'Both flags moving up and down from shoulder height crossing above \
      the head.',
    meaning: 'The lifeguard in the water should give attention to the shore as \
      soon as possible.',
    image: 'img/flag-signals/attract-attention.jpg'
  }, {
    id: 16,
    type: 'flag',
    subType: '',
    name: 'Message understood',
    action: 'One flag held high and cut away downward to the ground.',
    meaning: 'The shore has received the lifeguard\'s message and understood \
      it.',
    image: 'img/flag-signals/message-understood.jpg'
  }, {
    id: 17,
    type: 'flag',
    subType: '',
    name: 'Message not clear, repeat',
    action: 'One flag waved side to side above head.',
    meaning: 'The shore has not understood the lifeguard\'s message and the \
      lifeguard should repeat the message.',
    image: 'img/flag-signals/message-unclear.jpg'
  }, {
    id: 18,
    type: 'flag',
    subType: '',
    name: 'Boat to investigate submerged object',
    action: 'One flag held horizontal in the required direction, the other \
      flag at 45 degrees below the horizontal in the opposite direction.',
    meaning: 'Boat should investiate submerged object in the direction \
      indicated.',
    image: 'img/flag-signals/investigate-submerged-right.jpg'
  }, {
    id: 19,
    type: 'board',
    subType: '',
    name: 'Swimmer required',
    action: 'One arm held vertically above the head',
    meaning: 'Send a lifegaurd to support in the water.',
    image: 'img/board-signals/swimmer-required.jpg'
  }, {
    id: 20,
    type: 'board',
    subType: '',
    name: 'Another board required',
    action: 'One arm waved to and fro above the head',
    meaning: 'Send a lifegaurd on another board to support in the water.',
    image: 'img/board-signals/board-required.jpg'
  }, {
    id: 21,
    type: 'board',
    subType: '',
    name: 'Danger',
    action: 'Two arms held vertically above the head',
    meaning: 'Danger in the water, could potentially be sharks.',
    image: 'img/board-signals/danger.jpg'
  }, {
    id: 22,
    type: 'board',
    subType: '',
    name: 'All clear',
    action: 'Two arms held horizontally',
    meaning: 'All clear no more perceived danger in the water.',
    image: 'img/board-signals/all-clear.jpg'
  }
];

  return {
    all: function() {
      return signals;
    },
    allOfType: function(type) {
      var myArray = [];
      for (var i = 0; i < signals.length; i++) {
        if (signals[i].type == type) {
          myArray.push(signals[i]);
        }
      }
      return myArray
    },
    remove: function(signal) {
      chats.splice(chats.indexOf(signal), 1);
    },
    get: function(signalId) {
      for (var i = 0; i < signals.length; i++) {
        if (signals[i].id === parseInt(signalId)) {
          return signals[i];
        }
      }
      return null;
    }
  };
});
