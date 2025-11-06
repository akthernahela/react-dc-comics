export default function ComicCard(props) {
    const { comic } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src={thumb} alt='' />
                <div className="card-body">
                    <div>{series}</div>
                </div>
            </div>
        </div>
    )
}    