import { header } from './components/header.js';
import { footer } from './components/footer.js';

const rootEl = document.querySelector('#root');

const render = () => {
    rootEl.innerHTML = `
        <div>
            ${header()}
            <main>
                <h1>Es Modules Example</h1>
            </main>
            ${footer()}
        </div>
    `;
};

render();
