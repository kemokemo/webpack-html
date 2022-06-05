import template from "./template.html";

class KemoComponent extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
		<p>My name is <span id='name'></span>.</p>
		<div id="my-template"></div>`;
		this.nameElem = this.shadowRoot.getElementById('name');

		// add content via imported html file.
		this.myTemplate = this.shadowRoot.getElementById('my-template');
		this.myTemplate.innerHTML = template;
		// you can manipulate the imported element by id.
		this.shadowRoot.getElementById("food").innerText = "Takoyaki";
    }

    connectedCallback() {
        this.name = this.getAttribute("name");
        this.nameElem.innerText = this.name;
    }

    setName(value) {
        this.name = value;
        this.nameElem.innerText = this.name;
    }
}

customElements.define("kemo-component", KemoComponent);