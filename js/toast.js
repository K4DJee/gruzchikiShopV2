
// function showToast(text, duration){
//     if(isToast){
//         toast.style.display = 'flex';
//     toastText.textContent = text;
//     toast.style.opacity = '1';
//     toast.style.transform = 'translateX(-265px)';
//     toast.style.transform = 'translateY(-65px)';
//     }
//     else{
//         isToast = true;
//     toast.style.display = 'flex';
//     toastText.textContent = text;
//     toast.style.opacity = '1';
//     toast.style.transform = 'translateX(-265px)';
//     }
//     // toast.addEventListener(('transitionend',()=>{
//     //     toast.style.display = 'none';
//     //     toastText.textContent = '';
//     // },{once: true}));
//     setTimeout(()=>{
//         toast.style.opacity = '0';
//         toast.style.display = 'none';
//         toastText.textContent = '';
//         isToast = false;
//     }, duration)
// }

const toastSection = document.getElementById('toast_section');
const toastTemplate = document.getElementById('toast');

function showToast(text, duration, bg){
    let toastElement = toastTemplate.cloneNode(true);
    toastElement.id = '';
    if(bg) toastElement.style.backgroundColor = bg;
    const toastTextElement = toastElement.querySelector('.toast-text');
    if (toastTextElement) toastTextElement.textContent = text;
    toastElement.style.opacity = '0';
    toastElement.style.display = 'flex';

    toastSection.appendChild(toastElement);

    void toastElement.offsetWidth;//Триггер для анимации

    toastElement.style.opacity = '1';

    setTimeout(()=>{
        toastElement.style.opacity = 0;
        setTimeout(()=>{
            toastSection.removeChild(toastElement);
        }, 300)
    }, duration);

}

showToast('Заявка успешно отправлена!', 2000);