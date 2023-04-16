import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MenuCard extends LitElement {
    static styles = css`
        :host {
            display: block;
            color: white;
        }
        .container-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            border-radius: 2rem;
            background-color: var(--colorPrimario);
        }
        [name="cardTitle"]{
            display: block;
            font-size: 2.8rem;
            font-weight: 700;
            margin: 1.5rem 0;
        }
        [name="cardButton"]{
            display: block;
            text-decoration: none;
            color: white;
            font-size: 1.6rem;
            font-weight: 300;
            background-color: var(--colorTerciario);
            padding: 1rem;
            border-radius: 0.3rem;
        }
    `;

    render() {
        return html`
            <div class="container-card">
                <slot name="cardImage"></slot>
                <slot class="card__title" name="cardTitle">Desayuno</slot>
                <slot class="card__button" name="cardButton">Seleccionar</slot>
            </div>
        `;
    }
}

customElements.define('menu-card', MenuCard);