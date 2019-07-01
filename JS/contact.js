class Form {
    constructor(formElement) {
        this.formElement = formElement;
        this.inputFields = this.formElement.querySelectorAll('input');
        this.messageField = this.formElement.querySelector('textarea');
        this.buttonGroup = this.formElement.querySelector('.button-group');
        this.buttons = this.formElement.querySelectorAll('button');
        this.sendButton = this.formElement.querySelector('.send-button');
        this.reset();
        this.submit();
    }
    reset(){
        this.buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                this.messageField.value = '';
                this.inputFields.forEach((field) => {
                    field.value = '';
                });
            });
        })
    }
    submit(){
        const messageSent = document.createElement('p');
        messageSent.textContent = 'Your message has been sent.';
        this.sendButton.addEventListener('click', () => {
            this.buttonGroup.appendChild(messageSent);
            setTimeout(() => {
                this.buttonGroup.removeChild(messageSent);
            }, 1500)
        })
    }
  }

let form = document.querySelector('form');
form = new Form(form);