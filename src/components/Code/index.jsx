import React from 'react';
// import { Code } from 'react-embed-code';

const EmbedCode = () => {
  const str = `import React, { useRef } from 'react';

  export default function Blog() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // 'current' aponta para o evento de 'focus' gerado pelo campo de texto
      inputEl.current.focus();
    };

    return (
        <div className="page-blog">
          <input ref={inputEl} type="text" />
          <button type="button" onClick={onButtonClick}>Focus no input</button>
        </div>
    );
  }`;
  return (
    <pre>{str}</pre>
  );
};

export default EmbedCode;
