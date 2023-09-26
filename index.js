class Block {
  constructor() {
    this.isThereActiveButton = false;
    this.buttons = [...document.querySelectorAll('.btn-container')];
    this.activeButton = 'active-btn';
  }

  onOperationButton(event) {
    if (this.isButtonActive(event.target)) {
      this.isThereActiveButton = false;
      event.target.classList.remove(this.activeButton);
      const img = event.target.querySelector('img');
      img.src = './images/plus.svg';
      return event.target.children[event.target.children.length - 1].style.display = 'none';
    }

    if (!this.isThereActiveButton) {
      this.isThereActiveButton = true;
      event.target.classList.add(this.activeButton);
      const img = event.target.querySelector('img');
      img.src = './images/minus.svg';
      return event.target.children[event.target.children.length - 1].style.display = 'flex';
    }
  }

  isButtonActive(button) {
    return button.classList.contains(this.activeButton);
  }

  start() {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this.onOperationButton.bind(this));
    }
  }
}

const block = new Block();
block.start();