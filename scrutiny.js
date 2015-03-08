
var Scrutiny_new = Parse.Object.extend("Scrutiny");
var scrutiny_new = new Scrutiny_new ();

// scrutiny_new.set("Rank", "1");
// scrutiny_new.set("Name", "NXPI");
// scrutiny_new.set("Rates", "9.89");

// scrutiny_new.set("Rank", "2");
// scrutiny_new.set("Name", "AEZS");
// scrutiny_new.set("Rates", "9.35");

// scrutiny_new.set("Rank", "3");
// scrutiny_new.set("Name", "KYTH");
// scrutiny_new.set("Rates", "4.57");

// scrutiny_new.set("Rank", "4");
// scrutiny_new.set("Name", "LL");
// scrutiny_new.set("Rates", "3.72");

// scrutiny_new.set("Rank", "5");
// scrutiny_new.set("Name", "OREX");
// scrutiny_new.set("Rates", "3.45");

scrutiny_new.save({
  rank: [1,2,3,4,5]
  name: ["NXPI","AEZS","KYTH","LL","OREX"],
  rates: [9.89,9.35,4.57,3.72,3.45]
}, {
  success: function(gameScore) {
    // The object was saved successfully.
  },
  error: function(gameScore, error) {
    // The save failed.
    // error is a Parse.Error with an error code and message.
  }
});

/*scrutiny_new.save(null, {
  success: function(scrutiny_new) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + scrutiny_new.id);
  },
  error: function(scrutiny_new, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
*/

var ranking = scrutiny_new.get("rank");
var stockName = scrutiny_new.get("name");
var earns = scrutiny_new.get("rates");

