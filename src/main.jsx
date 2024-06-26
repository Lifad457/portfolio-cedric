import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(<Route path='/' element={<App />} />)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
