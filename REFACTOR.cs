function App() {
  const api = new ApiService();
  let data;

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        data = response;
      })
.catch(e => {
  console.error(e);
});

  }, []);

  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;

// Home.js
function Home({data}) {
    const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState(data);

useEffect(() => {
  if (restaurants.length > 0) setIsLoading(false);
}, [restaurants]);

  const reset = () => {
    setIsLoading(true);
    setRestaurants(data);
  }
}

