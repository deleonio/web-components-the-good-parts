export class MyShadowElement extends HTMLElement {
  constructor() {
    super();
    this.root = this;
  }

  connectedCallback() {
    const shadow = this.getAttribute("shadow");
    if (shadow === "" || shadow === "open" || shadow === "closed") {
      this.root = this.attachShadow({
        mode: shadow === "closed" ? "closed" : "open",
      });
    } else if (shadow !== null) {
      console.warn(`Invalid value for shadow attribute: ${shadow}`);
    }
  }
}
