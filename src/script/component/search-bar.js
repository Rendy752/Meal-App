class searchBar extends HTMLElement {
  connectedCallback() {
    this.className="row center-align";
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get keyword() {
    return this.querySelector('#meals-keyword').value;
  }

  render() {
    this.innerHTML = `
        <div class="input-field col s10 m8 offset-m1">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="meals-keyword" class="materialize-textarea"></textarea>
          <label for="meals-keyword">Search Meals</label>
        </div>
        <a id="searchButton" class="btn-floating btn-large waves-effect waves-light blue hoverable col"><i class="material-icons">search</i></a>
      `;
      this.querySelector('#searchButton').addEventListener('click',this._clickEvent);
  }
}

customElements.define('search-bar', searchBar);
