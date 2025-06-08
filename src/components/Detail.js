import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			.then((data) => data.json())
			.then((json) => {
				console.log(json);
				setMovie(json);
				setLoading(false);
			});
	}, [id]);

	return (
		<>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<>
					<h1>
						{movie.data.movie.title} ({movie.data.movie.year})
					</h1>
					<img
						alt="movie poster"
						src={movie.data.movie.medium_cover_image}
					/>
					<ul>
						{movie.data.movie.genres.map((value, index) => (
							<li key={index}>{value}</li>
						))}
					</ul>
					<h3>rating: {movie.data.movie.rating}</h3>
					<h3>
						See more information in{" "}
						<a
							href={movie.data.movie.url}
							target="_blank"
							rel="noopener noreferrer">
							here
						</a>
					</h3>

					<h4>
						<Link to="/">Back to Main</Link>
					</h4>
				</>
			)}
		</>
	);
}

export default Detail;
