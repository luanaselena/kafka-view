import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from "./components/ui/SignIn";
import SignUp from "./components/ui/SignUp";
import BusquedaUsuarios from "./components/ui/BusquedaUsuarios";
import PostsPropios from "./components/ui/PostsPropios";
import Navegacion from "./components/ui/Navegacion";
import Posts from "./components/ui/Posts";

function App() {
	return (
		<Router>
			<div>
				<Navegacion />

				{/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/signin">
						<SignIn />
					</Route>
          <Route path="/signup">
						<SignUp />
					</Route>
          <Route path="/busquedausuarios">
						<BusquedaUsuarios />
					</Route>
					<Route path="/posts">
						<Posts />
					</Route>
					<Route path="/misposts">
						<PostsPropios />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
