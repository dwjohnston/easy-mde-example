import React, { useEffect, useRef } from 'react';
import './App.css';
import EasyMDE from 'easymde';
import 'easymde/dist/easymde.min.css';

function App() {


  const ref = useRef(null); 

  useEffect(() => {

    console.log(ref); 

    if (ref.current){
      const easyMdeInstance = new EasyMDE(
       ref.current, 
      );

      easyMdeInstance.codemirror.setOption('extraKeys', 
         {
          'Ctrl-Enter': () => {
            console.log("hello")
          }, 
          'Cmd-Enter': () => {
            console.log("foo bar")
          }
        }
      ); 

    }
  }, [ref])

  return (
    <div className="App">
      <form onSubmit = {(e) => {
        e.preventDefault(); 

        console.log("submit");
        
      }}>

        <input type = "text"/>


        <textarea id ="mde" ref = {ref}/>

        <button type = "submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
