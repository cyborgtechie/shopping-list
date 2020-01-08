//link to live repl.it version: https://repl.it/@cyborgtechie/shopping-list-final

// 1) enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
//2) check and uncheck items on the list by clicking the "Check" button
//3) permanently remove items from the list

'use strict';

// 1) adds functionality when user clicks "add item" or "return" to the list
$('#js-shopping-list-form' ).submit(function(event) {
    event.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    // pushes new item to the list and updates parent class (ul)
    $('.shopping-list').append( 
        `<li>
        <span class='shopping-item'>${newItem}</span>
        <div class='shopping-item-controls'>
          <button class='shopping-item-toggle'>
            <span class='button-label'>check</span>
          </button>
          <button class='shopping-item-delete'>
            <span class='button-label'>delete</span>
          </button>
        </div>
        </li>`
    );
     $('#shopping-list-entry').val('');
});

// 2) marks item as "checked" when user clicks on "check", and will uncheck item when clicked again without changing parent
// eg "milk" will become unchecked
$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    event.stopPropagation();
    $(this).closest( "li" ).find('.shopping-item')
    .toggleClass('shopping-item__checked');
});

//3) permenately removes an item when user clicks on delete button without changing parent
$('.shopping-list').on('click','.shopping-item-delete', function(event) {
    event.stopPropagation();
    $(this).closest("li").remove();
});
