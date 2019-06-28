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
        this.sendButton.addEventListener('click', () => {
            const messageSent = document.createElement('p');
            messageSent.textContent = 'Your message has been sent.'
            this.buttonGroup.appendChild(messageSent);
        })
    }
  }

let form = document.querySelector('form');
form = new Form(form);