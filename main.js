import { list } from './data/list.js';

const container = document.querySelector('[data-button]');

const createButton = (name, link) => {
  const space = document.createElement('div');
  space.setAttribute('class', 'container');

  const content = `
  <a class="link-btn" id="link-button" href="${link}">
  <button type="button" id="linked-button" class="btn btn-secondary m-2 center">
  ${name}</button>
  </a>`;

  space.innerHTML = content;

  return space;
};

const render = async () => {
  let data = await list;
  iterator(data);
  return data;
};

function iterator(data) {
  data.forEach(el => {
    container.appendChild(createButton(el.name, el.link));
  });
}

render();
