import React from 'react';
import './App.css';
import { Admin, Resource, EditGuesser, ShowGuesser} from 'react-admin';
import offers from './components/offers';
import { MyLayout } from './layout';
import jsonServerProvider from 'ra-data-json-server';


const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
	<Admin dataProvider={dataProvider} layout={MyLayout}>
		<Resource name="offers" options={{ label: 'All Offers' }} {...offers}/>
	</Admin>
);

export default App;
