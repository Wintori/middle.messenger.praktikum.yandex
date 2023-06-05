import Block from './Block';

export default function renderDom(block: Block) {
    const root = document.querySelector("#app");

    root!.innerHTML = "";
    root!.appendChild(block.getContent());
}