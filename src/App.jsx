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
import { ThemeProvider } from "./ThemeContext";
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

          {/*//!  ClientAPI !//*/}
          {/*//!  ACTIONS !//*/}
          {/* <AsyncTransition /> */}
          {/* <UseActionState /> */}
          {/* <UseFormStatus /> */}
          {/* <UseOptimistic /> */}
          {/*//!  The non-action ClientAPI features !//*/}
          {/* <ThemeProvider>
            <Use />
          </ThemeProvider> */}

          {/*//!  REACT COMPILER !//*/}
          {/* <Compiler /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
