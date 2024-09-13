import PropTypes from 'prop-types' 

export default function NewsItem(props) {
    const { title, desc, imageURL, newsUrl, sourceName } = props;
    return (
        <div>
            <div className="card my-3">
                <img src={imageURL}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="w-100 fs-6 
                        text-body-secondary 
                        text-end">
                        - {sourceName}
                    </p>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl}
                        target="_blan"
                        className="btn btn-primary btn-sm">
                        Read More...
                    </a>
                </div>
            </div>
        </div>
    );
}
    NewsItem.propTypes = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        imageURL: PropTypes.string,
        newsUrl: PropTypes.string.isRequired,
        sourceName: PropTypes.string.isRequired,
    }