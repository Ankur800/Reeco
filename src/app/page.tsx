'use client';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePageLayout from '@/layouts/HomePageLayout';

export default function Home() {
	return (
		<Provider store={store}>
			<HomePageLayout />
		</Provider>
	);
}
