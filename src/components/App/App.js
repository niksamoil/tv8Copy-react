import React from 'react';
import PostList from '../PostList/PostList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
	
	return (
		<Router>
			<div className='container'>
					<Switch >
						<Route path='/' component={PostList} />
					</Switch>
			</div>
		</Router>
	);
};

export default App;
