
// const formButton = document.getElementById();
const form = document.getElementById('requestForm');


//phone logic

async function sendForm(){
    const formData = new FormData(form);
    const formObject = {
        name:formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        service:formData.get('service'),
        comment: formData.get('comment'),
    }

    let hasError = false;

    clearErrors();

    for(var {value, message} of requiredFields){
        if(!formObject[value]){
            console.log('message: ', message)
            document.getElementById('errorMessage').textContent = 'Заполните необходимые поля!';
            const input = document.querySelector(`[name="${value}"]`);
            if (input) {
              input.classList.add('input-error');
            }
            hasError = true;
        }
    }

    if(hasError) return;

    if(!isValidName(formObject.name)){
        document.getElementById('errorMessage').textContent = 'Введите корректное имя';
        return;
    }

    if(!isValidPhone(formObject.phone)){
        document.getElementById('errorMessage').textContent = 'Введите корректный телефон';
        return;
    }

    formData.append('_captcha', 'false'); // отключить капчу
    formData.append('_next', 'http://127.0.0.1:5500/src/index.html'); // куда редиректить после отправки
    const response = await fetch('https://formsubmit.co/93474a677850f0839ba8d6809fe56bcb',{
        method:'POST',
        body:formData,
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok){
        console.log('Заявка отправлена');
        showToast('Заявка успешно отправлена!', 2000);
    }
    else{
        console.log('Ошибка при отправке заявки');
        showToast('Ошибка при отправке заявки', 2000, 'red');
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendForm();
  });


//additionals
const requiredFields = [
    {value:'name', message:'Введите имя'},
    {value:'phone', message:'Введите номер телефона'},
    {value:'address', message:'Введите адрес'},
    {value:'service', message:'Укажите услугу'}
]

function clearErrors() {
for (const { value } of requiredFields) {
    const input = document.querySelector(`[name="${value}"]`);
    document.getElementById('errorMessage').textContent = '';
    if (input) {
      input.classList.remove('input-error');
    }
}
}

function isValidName(name) {
    const trimmed = name?.trim() || '';
    return trimmed !== '' && !/^\d+$/.test(trimmed) || trimmed.length < 3;
}
  
function isValidPhone(phone) {
const trimmed = phone?.trim() || '';
// Поддерживает: +7, 8, 7, с пробелами, тире, скобками
const phoneRegex = /^[\+]?[78][\s\-\(\)]?[\d\s\-\(\)]{9,}$/;
return phoneRegex.test(trimmed);
}