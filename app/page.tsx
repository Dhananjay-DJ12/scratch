import dynamic from "next/dynamic";

/**
 * disable ssr to avoid pre-rendering issues of Next.js
 *
 * we're doing this because we're using a canvas element that can't be pre-rendered by Next.js on the server
 */
<<<<<<< HEAD
const App = dynamic(() => import("./App"), { ssr: false });
=======
const App = dynamicImport(() => import("./App"), { ssr: false });

export const dynamic = "error";
>>>>>>> d977252529ec070ea20a999d5fcd32ede15563d7

export default App;
 