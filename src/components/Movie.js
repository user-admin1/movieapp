import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
	return (
		<div key={id}>
			<h2>
				<Link to={`/movies/${id}`}>{title}</Link>
			</h2>
			<img src={coverImg} alt={title} />
			<h4>{summary}</h4>
			<ul>
				{genres.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<hr />
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
