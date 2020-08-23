import React from "react";
import "./App.scss";
import { MarkdownToMatrix } from 'react-markdown-to-matrix';

function App() {

  return (
    <MarkdownToMatrix 
      title='Codecademy Engineering'
      subtitle='Competency Explorer'
      enabledOptions={['diff', 'filters', 'displayMode']} 
      fileUrls={['README.md', 'managers.md']}
      excludeHeaders={['FAQ']}
      customTheme={{
        light: '#FFFFFF',
        lightTheme: '#fff0e5',
        darkTheme: '#10162f',
        dark: `#10162f`
      }}
    />
  );
}

export default App;
