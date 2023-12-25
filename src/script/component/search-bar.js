class searchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <div class="row center-align">
      <div class="row">
        <div class="input-field col s10 m8 offset-m1">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="meals-keyword" class="materialize-textarea" id="searchElement"></textarea>
          <label for="meals-keyword">Search Meals</label>
        </div>
        <a id="searchButton" class="btn-floating btn-large waves-effect waves-light blue hoverable col"><i class="material-icons">search</i></a>
      </div>
  </div>
      `;
    this.querySelector('#searchButton').addEventListener(
      'click',
      this.clickEvent,
    );
  }
}

customElements.define('search-bar', searchBar);
