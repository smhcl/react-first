const List = () => {
    return (
        <>
                <h4 className="mb-4">Categories</h4>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://i2.wp.com/literacle.com/wp-content/uploads/2018/07/stock-vector-literature-hand-drawn-vector-illustration-with-doodle-icons-images-and-objects-arranged-in-a-circle-477961258.jpg?fit=450%2C444&ssl=1"
                                className="card-img-top" alt="Literature" />
                            <div className="card-body">
                                <h5 className="card-title">Literature</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="/" className="btn btn-primary">Literature</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://theengineer.markallengroup.com/production/2020/01/scifi-eye-stock.adobe_.com-James-Thew.jpg"
                                className="card-img-top" alt="Sci FI" />
                            <div className="card-body">
                                <h5 className="card-title">Sci Fi</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="/" className="btn btn-primary">Sci Fi</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src="https://media.gettyimages.com/photos/distant-castle-near-waterfall-picture-id740520739?s=612x612"
                                className="card-img-top" alt="Fantasy" />
                            <div className="card-body">
                                <h5 className="card-title">Fantasy</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="/" className="btn btn-primary">Fantasy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default List;
