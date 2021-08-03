import ObjectRenderer from './DOM/dom_functions';

export default async function run() {
  const objRenderer = new ObjectRenderer();
  objRenderer.renderElements('monsters');
}
