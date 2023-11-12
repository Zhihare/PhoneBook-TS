import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/appBar';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { MobileAppBar } from 'components/AppBar/mobileApp';
import Media from 'react-media';

export const Layout = () => {
	return (
		<>
			<Media query="(max-width: 600px)" render={() => <MobileAppBar />}
			/>
			<Media query="(min-width: 601px)" render={() => <AppBar />}
			/>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	);
};