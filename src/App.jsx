import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import ROUTES from 'routes/routes';

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path={ROUTES.LOGIN} element={<Layouts />}>
				<Route index element={<Login />} />
				<Route path={ROUTES.CODELOGIN} element={<CodeLogin />} />
				<Route path={ROUTES.VERIFLOGINCODE} element={<VerifiLoginCode />} />
			</Route>,
		),
	);
	return (
		<div>
			<RouterProvider router={router} />
			<h1>cwevwe</h1>
		</div>
	);
}
