class MealDetailModal extends HTMLElement {
  connectedCallback() {
    this.setAttribute('id', 'meal-detail');
    this.className = 'modal modal-fixed-footer';
  }

  set detail(detail) {
    this._detail = detail[0];
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="modal-content orange lighten-5">
      <div class="row flow-text">
        <span>${this._detail.strMeal}</span>
        <span class="new hoverable badge green" data-badge-caption="Category">${
          this._detail.strCategory
        }</span>
        <span class="new hoverable badge blue" data-badge-caption="Area">${
          this._detail.strArea
        }</span>
      </div>
      <div class="divider"></div>
      <div class="card-image waves-effect waves-block waves-light center-align">
        <img class="circle responsive-img" src="${this._detail.strMealThumb}">
      </div>
      <div class="divider"></div>
      <h4>Ingredients</h4>
      <div class="divider"></div>

      <div class="slider">
        <ul class="slides">
        </ul>
      </div>

      <h4>Instructions</h4>
      <div class="divider"></div>
      <p>${this._detail.strInstructions.replace('\n', '<br>')}</p>
      <div class="divider"></div>
      <h4>Video</h4>
      <div class="divider"></div>
      <div class="video-container">
        <iframe width="853" height="480" src=${
          this._detail.strYoutube
            ? this._detail.strYoutube.replace('watch?v=', 'embed/')
            : 'https://www.youtube.com/embed/JrorqbFNMF4'
        } frameborder="0" allowfullscreen></iframe>
      </div>        
    </div>
    <div class="modal-footer orange lighten-3">
      <a href="${
        this._detail.strSource
          ? this._detail.strSource
          : 'https://merahputih.com/media/c0/0e/d2/c00ed25b79766b3cafca6962d62714ad.png'
      }" target="_blank" class="modal-close waves-effect waves-orange btn-flat">Show Source</a>
    </div>
    `;
    [...Array(20)].forEach((_, number) => {
      const ingredient = this._detail['strIngredient' + (number + 1)];
      const measure = this._detail['strMeasure' + (number + 1)];
      if (ingredient) {
        this.querySelector('.slides').innerHTML += `
        <li>
          <img class="responsive-img" src="https://www.themealdb.com/images/ingredients/${ingredient}.png">
          <div class="caption left-align">
            <h2 class="card-panel orange lighten-5 transparent hoverable black-text waves-effect waves-block waves-light">${measure} ${ingredient}</h2>
          </div>
        </li>`;
      }
    });
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider);
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
