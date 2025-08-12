document.querySelectorAll('.order-btn').forEach(button =>{
    button.addEventListener('click', function(){
        const serviceName = this.getAttribute('data-service');
        const radioInput = document.querySelector(`input[name="service"][value="${serviceName}"]`);

        if(radioInput){
            radioInput.checked = true;
        }

        const formSection = document.getElementById('leave-a-request');
        formSection.scrollIntoView({behavior:"smooth"});
    })
})