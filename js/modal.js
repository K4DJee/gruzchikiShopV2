//modalYandexMaps logic
const modalMap = document.getElementById('modalYM');
const modalMapContainer = document.getElementById('modalYMContainer');
var isOpen3 = false;
function openModalYM(){
  if(isOpen3 === true){
    
    isOpen3 = false;
  }
  toggleModal(true);
  modalMap.style.display = 'flex';
  modalMap.style.opacity = '1';
  modalMapContainer.style.opacity = '1';
  isOpen3 = true;

}

function closeModalYM(){
  toggleModal(false);
  modalMapContainer.style.opacity = '0';
  modalMap.style.opacity = '0';
  modalMap.style.display = 'none';
  isOpen3 = false;
}