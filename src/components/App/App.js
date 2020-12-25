import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostListContainer from '../PostList';
import PostPage from '../PostPage/PostPage';
import './App.css';

const App = () => {
	
	return (
		<Router>
			<div className='container'>
				<Switch >
					<Route exact path='/' component={PostListContainer} />
					<Route path='/post/:id' component={PostPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
