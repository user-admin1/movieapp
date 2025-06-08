import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [defaultvalue, setDefaultvalue] = useState(null);
	const [nowValue, setNowValue] = useState(null);
	useEffect(() => {
		fetch(
			"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
		)
			.then((res) => res.json())
			.then((data) => {
				setDefaultvalue(data.data.movies);
				setNowValue(data.data.movies);
				setLoading(false);
			});
	}, []);
	console.log(defaultvalue);
	return (
		<>
			{loading ? (
				<h1>loading</h1>
			) : (
				<div>
					<input
						type="text"
						placeholder="Search movie here"
						onChange={(e) => {
							const keyword = e.target.value.toLowerCase();
							console.log(e.currentTarget.value);
							setNowValue(() =>
								defaultvalue.filter(
									(value) =>
										value.title
											.toLowerCase()
											.includes(keyword) ||
										value.summary
											.toLowerCase()
											.includes(keyword)
								)
							);
							console.log(nowValue);
						}}></input>
					{nowValue.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							genres={movie.genres}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
						/>
					))}
				</div>
			)}
		</>
	);
}

export default Home;
