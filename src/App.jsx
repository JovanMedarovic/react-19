/* eslint-disable @typescript-eslint/no-unused-vars */
import endavaLogo from "../resources/endava.svg";
import { Compiler } from "./ReactCompiler";
import { AsyncTransition } from "./ClientAPI/AsyncTransition";
import { UseActionState } from "./ClientAPI/UseActionState";
import { UseFormStatus } from "./ClientAPI/UseFormStatus";
import { UseOptimistic } from "./ClientAPI/UseOptimistic";
import { Use } from "./ClientAPI/Use";
import { DocumentMetadata } from "./Improvements/DocumentMetadata";
import { Ref } from "./Improvements/Ref";
import { StylesheetSupport } from "./Improvements/StylesheetSupport";
import "./App.css";

function App() {
  return (
    <main>
      <img src={endavaLogo} alt="EndavaLogo" className="endava-logo" />
      <div className="container">
        <h1>REACT 19</h1>
        <div>
          {/*//!  Improvements !//*/}
          {/* <Ref /> */}
          {/* <DocumentMetadata /> */}
          {/* <StylesheetSupport /> */}

          {/*//!  ClientAPI !//*/}
          {/*//!  ACTIONS !//*/}
          {/* <AsyncTransition /> */}
          {/* <UseActionState /> */}
          <UseFormStatus />
          {/* <UseOptimistic /> */}
          {/*//!  The rest of ClientAPI features !//*/}
          {/* <Use /> */}

          {/*//!  REACT COMPILER !//*/}
          {/* <Compiler /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
