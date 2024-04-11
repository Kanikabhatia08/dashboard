import React, { Suspense } from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import Loading from '../components/Loading';
const Header = React.lazy(() => import('../components/Header'));

const Editor = () =>{
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Suspense fallback={<Loading/>}>
        <Header category="App" title="Editor" />
      </Suspense>
      <div className='rounded-3xl p-3 bg-white '>
        <RichTextEditorComponent  >
          <EditorData />
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
      
    </div>
);
}
export default Editor;