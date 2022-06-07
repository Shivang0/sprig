import { dispatch } from "../dispatch.js";
import { evalGameScript } from "./evalGameScript.js";

export function run(args, state) {
  state.logs = [];
  state.error = false;
  
  const cmLines = document.querySelectorAll(".cm-line");

  for (let i = 0; i < cmLines.length; i++) {
    const cmLine = cmLines[i];
    cmLine.style.background = "";
    cmLine.classList.remove("err-line");
  }

  const script = state.codemirror.state.doc.toString();
  const err = evalGameScript(script);
  if (err) dispatch("LOG_ERROR", { err });

  dispatch("RENDER");
}