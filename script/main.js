setTimeout(() => {
    setInterval(() => {
        let button = document.getElementsByClassName('tw-button tw-button--success');
        let buttonEl = button[0];
        if (buttonEl != undefined){
            buttonEl.click();
        }
    },2000);
},5000);