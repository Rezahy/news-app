import { useRoutes } from "react-router-dom";
import router from "./router/router";
import Layout from "./app/layout";

const App = () => {
	const appRouter = useRoutes(router);
	return <Layout>{appRouter}</Layout>;
};
export default App;
