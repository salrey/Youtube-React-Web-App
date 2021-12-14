import { Link } from "react-router-dom";

const mapFavData = (favData) => {
    return favData.items.map((el) => {
        const { title, description, thumbnails } = el.snippet
        const { etag, id } = el
        const { medium } = thumbnails
        return (
            <div className="fav-card" key={etag} name={id.videoId}>
                <Link to={`/videos/${id.videoId}`}>
                    <img src={medium.url} alt="" />
                    <div className="fav-info">
                        <h3 name="title">{title}</h3>
                        <p name="description">{description}</p>
                    </div>
                </Link>
            </div>
        )
    })
}

export default mapFavData