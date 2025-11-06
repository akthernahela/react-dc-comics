export default function ComicCard(props) {
    const { comic } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src={comic.thumb} alt='' />
                <div className="card-body">
                    <div>{comic.series}</div>
                </div>
            </div>
        </div>
    )
}    