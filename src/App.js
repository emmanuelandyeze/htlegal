import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./page/Home";
import About from "./page/About";
import Blog from './page/Blog';
import Contact from './page/Contact';
import Search from './page/Search';
import Services from './page/Services';
import UserProfile from './page/UserProfile';
import UserEditProfile from './page/UserEditProfile';
import AdminDashboard from './page/AdminDashboard';

function App() {
	return (
		<div className="app">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />

				{/* Approach #1 */}
				<Route path="/services">
					<Route index element={<Services />} />
					<Route path="profile" element={<UserProfile />} />
					<Route
						path=":editId"
						element={<UserEditProfile />}
					/>
					<Route
						path="admin"
						element={<AdminDashboard />}
					/>
				</Route>

				{/* Approach #2 */}
				<Route path="blog" element={<Blog />} />
				<Route path="contact" element={<Contact />} />

				<Route path="search" element={<Search />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export const NotFound = () => {
  return <div><h1> 404 page not found </h1> </div>
}

export default App;
