$(document).ready(initializeApp);

var place_array=[];

function initializeApp(){
    addClickHandlersToElements();
    getDataFromServer(); 
    
}

function addClickHandlersToElements(){

    $("#addButton").click(handleAddClicked);
    $("#cancelButton").click(handleCancelClick);
  
}

function handleAddPlaceClicked(event){
    addPlace();
   
}

function addPlace(){
    place={};
    place.place=$("#place").val();
    place_array.push(place);

}

function getDataFromServer(){
    var the_data={
        action: 'read'
    }
    
    $.ajax({
          data:the_data,
          dataType:'json',
          method:'post',
          url:'php/read.php',
          success: function (response){
                console.log(response);       
          },
          error: function (err) {
                console.log(err);
    
          }
        }); 
    }
    