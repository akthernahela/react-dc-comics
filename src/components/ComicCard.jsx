export default function ComicCard(props) {

    return (
        <div className="col" key={comic.id}>
            <div className="card h-100">
                <img className="card-img-top" src={comic.thumb} alt='' />
                <div className="card-body">
                    <div>{comic.series}</div>
                </div>
            </div>
        </div>
    )
}    