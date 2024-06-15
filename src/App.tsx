/* eslint-disable @typescript-eslint/no-unused-vars */
import endavaLogo from "../resources/endava.svg";
import { Compiler } from "./ReactCompiler";
import { AsyncTransition } from "./ClientAPI/AsyncTransition";
import { Action } from "./ClientAPI/Action";
import { UseActionState } from "./ClientAPI/UseActionState";
import { UseFormStatus } from "./ClientAPI/UseFormStatus";
import { UseOptimistic } from "./ClientAPI/UseOptimistic";
import { Use } from "./ClientAPI/Use";
import { PreloadingAPIs } from "./ClientAPI/PreloadingAPIs";
import { DocumentMetadata } from "./Improvements/DocumentMetadata";
import { Ref } from "./Improvements/Ref";
import { StylesheetSupport } from "./Improvements/StylesheetSupport";
import { ServerComponent } from "./ServerAPI/ServerComponent";
import { ServerAction } from "./ServerAPI/ServerAction";
import "./App.css";

function App() {
  return (
    <main>
      <img src={endavaLogo} alt="EndavaLogo" className="endava-logo" />
      <div className="container">
        <h1>REACT 19</h1>
        <div>
          {/*//!  REACT COMPILER !//*/}
          <Compiler />
          
          {/*//!  ClientAPI !//*/}
          {/* <AsyncTransition /> */}
          {/* <Action /> */}
          {/* <UseActionState /> */}
          {/* <UseFormStatus /> */}
          {/* <UseOptimistic /> */}
          {/* <Use /> */}
          {/* <PreloadingAPIs /> */}

          {/*//!  Improvments !//*/}
          {/* <Ref /> */}
          {/* <DocumentMetadata /> */}
          {/* <StylesheetSupport /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
