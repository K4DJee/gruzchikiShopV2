//sidebar logic
const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebar_button");
const sidebarContainer = document.getElementById("sidebar_container");
var isOpen = false;

function openSidebar() {
  if (isOpen === false) {
    sidebar.style.opacity = '1';
    sidebar.style.display = "flex";
    setTimeout(() => {
      sidebarContainer.classList.add("open");
      document.body.style.overflow = 'hidden';
    }, 10);
    isOpen = true; 
  } else {
    closeSidebar();
  }
}

function closeSidebar() {
  sidebarContainer.classList.remove("open");
  sidebarContainer.addEventListener('transitionend', () => {
    sidebar.style.display = 'none';
    document.body.style.overflow = '';
  }, { once: true });
  isOpen = false;
}

sidebar.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeSidebar();
  }
});


//Выпадающий список logic
var isOpen2 = false;

function openList(list, arrow){
  if(!list || !arrow){
    return console.log('Ошибка. Выпадающий список или его стрелка не выбраны');
  }
  const listElement = document.getElementById(list);
  const arrowSvgElement = document.getElementById(arrow);
  if(isOpen2 === true){
    listElement.style.display = '';
    arrowSvgElement.style.rotate = '';
    isOpen2 = false;
  }
  else{
    listElement.style.display = 'grid';
    arrowSvgElement.style.rotate = '180deg';
    isOpen2 = true;
  }
}



//Управление скроллбаром
function toggleModal(open) {
  const body = document.body;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (open) {
    // Запоминаем текущее положение прокрутки
    body.style.paddingRight = `${scrollbarWidth}px`;
    body.style.overflow = 'hidden';
    // Можно добавить класс для стилизации
    body.classList.add('modal-open');
  } else {
    // Возвращаем всё обратно
    body.style.paddingRight = '';
    body.style.overflow = '';
    body.classList.remove('modal-open');
  }
}