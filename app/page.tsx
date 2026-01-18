import dynamic from "next/dynamic";

/**
 * We disable SSR because the App uses canvas
 * which cannot be rendered on the server.
 */
const App = dynamic(() => import("./App"), { ssr: false });

export default App;
