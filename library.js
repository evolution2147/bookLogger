var clearValues = function() {
    $('#name').val("").focus();
    $('#author').val("");
    $('#pubdate').val("");
    $('#description').val("");
}

Library = new Meteor.Collection('library');
if (Meteor.isClient) {
 Template.main.library = function(){
  return Library.find();
  }

Template.main.events(
{
  'click .add': function() {
      var name = $('#name').val();
      var author = $('#author').val();
      var pubdate = $('#pubdate').val();
      var description = $('#description').val();
      var checkval = 0;
      Library.insert({name:name,author:author,pubdate:pubdate, 
        description:description, check:checkval});
      clearValues();
    },
  'click .removeAll': function() 
    {
     Meteor.call('removeA');
    },

    'click .destroy': function () {
      Library.remove(this._id);
    },
    'click .bookCall': function() {
      $('#myModal').modal(show);
    }
  }
  );
}

if (Meteor.isServer){
  Meteor.methods({ 
    removeA: function() {
      Library.remove({}); 
  },
    bookInfo: function(_id)
  {
    
  }
  });
}
