var clearValues = function() {

    $('#name').val("").focus();

    $('#author').val("");

    $('#pubdate').val("");

    $('#description').val("");

}



function updateId() {

  var idVal = Math.floor((Math.random()*100+1));

  return idVal.toString();

}



Library = new Meteor.Collection('library');

if (Meteor.isClient) {

 Template.main.library = function(){

  return Library.find();

  }



Template.main.events(

{

  'click .add': function() {

      //var bookID = updateId();

      var name = $('#name').val();

      var author = $('#author').val();

      var pubdate = $('#pubdate').val();

      var description = $('#description').val();

      Library.insert({name:name,author:author,pubdate:pubdate, 

        description:description});

      clearValues();

    }

},

  {

  'click .deleteBook': function() 

    {

     var bookID = document.getElementById("name").value;

     Library.remove(bookID);

    }

  },

  

  {

    'click .removeAll': function () 

    {

      Library.remove({});

    }

  });

}



if (Meteor.isServer)
{
  
  Meteor.methods({removeA: function() {

  Library.remove({}) }});

}

