import React from 'react';
import {
	NavLink,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import './Style.css';

const Invoice = () => {
	return (
		<div className="admin__dashboard">
			<h1
				style={{ textAlign: 'center', paddingTop: '10rem' }}
			>
				{' '}
				Coming Soon!!!{' '}
			</h1>
		</div>
	);
};

export default Invoice;
