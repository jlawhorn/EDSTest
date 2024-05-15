export const replaceContainerWithSection = (block) => {
  const sectionElement = document.createElement('section');

  Array.from(block.attributes).forEach((attr) => {
    sectionElement.setAttribute(attr.name, attr.value);
  });

  while (block.firstChild) {
    sectionElement.appendChild(block.firstChild);
  }

  return sectionElement;
};

export const test = () => null;
