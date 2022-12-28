import React, {useEffect, useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactQuill, { Quill,editor } from 'react-quill';
// import ImageResize  from 'quill-image-resize-module';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from './CustomToolbar'

 
// Quill.register('modules/ImageResize',ImageResize);
const Editor=()=> {
    
    const [text,setText] = useState('');
    
    const handleChange= (html)=> {
        setText(html);
    }
    const modules = {
        toolbar: {
            container: "#toolbar",
        }
    }
    const formats = [
      'font','size',
      'bold','italic','underline','strike',
      'color','background',
      'script',
      'header','blockquote','code-block',
      'indent','list',
      'direction','align',
      'link','image','video','formula',
      'code-block'
    ]
    
    return (
      <>
        <CustomToolbar />
        <ReactQuill
          value={text}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      </>
    )
}
 


export default Editor;