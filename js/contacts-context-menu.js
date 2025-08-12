const contactsContextMenu = document.getElementById('contacts_context_menu');
const contactsContextButton = document.getElementById('contacts_context_button');

var isOpen4 = false;

function openContactsContextMenu(){
    if(isOpen4){
        console.log(22)
        contactsContextMenu.style.display = 'none';
        isOpen4 = false;
    }
    else{
        contactsContextMenu.style.display = 'flex';
        isOpen4 = true;
    }
}