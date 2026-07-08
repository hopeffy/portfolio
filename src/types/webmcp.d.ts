import "react";

// WebMCP declarative-API attributes (https://developer.chrome.com/docs/ai/webmcp/declarative-api).
// They render as plain lowercase HTML attributes; declared here so TypeScript/JSX accepts them.
declare module "react" {
  interface HTMLAttributes<T> {
    /** On a <form>: names the WebMCP tool synthesized from this form. */
    toolname?: string;
    /** On a <form>: natural-language description of what the tool does. Pairs with toolname. */
    tooldescription?: string;
    /** On an input/select/textarea: describes this parameter for the agent. */
    toolparamdescription?: string;
    /** On a <form>: if present, the agent may auto-submit the form. */
    toolautosubmit?: boolean | "";
  }
}
