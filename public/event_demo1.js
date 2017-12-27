var events=require('events');
var util=require('util');

var person= function (name) {
  this.name=name;
};

util.inherits(person,events.EventEmitter);

var varsha=new person('varsha');
var adarsh=new person('adarsh');

var family=[varsha,adarsh];

family.forEach(function(person){

  person.on('speak',function(mssg){

    console.log(person.name+'said'+mssg);
  });

});

varsha.emit('speak','hey adu');
adarsh.emit('speak','hi vachu');
