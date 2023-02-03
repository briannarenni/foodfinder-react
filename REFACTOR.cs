function App() {
	const api = new ApiService();
	let dataRef = useRef(null);

	useEffect(() => {
		api.getRestaurants()
			.then(response => {
				dataRef.current = response;
			})
			.catch(e => {
				console.error(e);
			});
	}, []);

	return (
		<div className="App">
			<Home data={dataRef.current} />
		</div>
	);

}

// Home.js
function Home({data}) {
	const [isLoading, setIsLoading] = useState(true);
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		if (data) {
			setRestaurants(data);
			setIsLoading(false);
		}
	}, []);

	const reset = () => {
		setIsLoading(true);
		setRestaurants(data);
	}

	return (
		<div>
			<Results restaurants={restaurants} isLoading={isLoading} />
		</div>
	);
}

