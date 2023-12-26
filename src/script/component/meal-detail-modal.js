class MealDetailModal extends HTMLElement {
  connectedCallback() {
    this.setAttribute('id', 'meal-detail');
    this.className = 'modal modal-fixed-footer';
  }

  set detail(detail) {
    console.log(detail);
    this._detail = detail[0];
    console.log(this._detail);
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="modal-content">
    <h4>${this._detail.strMeal}</h4>
    <p>${this._detail.strInstructions}</p>
    </div>
    <div class="modal-footer">
    <a href="${this._detail.strSource}" target="_blank" class="modal-close waves-effect waves-green btn-flat">Show More</a>
    </div>
    `;
  }

  renderLoading() {
    this.innerHTML = `
    <div class="center-align">
      <circular-loading></circular-loading>
    </div>
    `;
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <div class="center-align flow-text">
      <span class="btn-floating pulse red darken-3"><i class="material-icons black-text">notifications_active</i></span>
      <span>${message}</span>
    </div>
    `;
  }
}

customElements.define('meal-detail-modal', MealDetailModal);
