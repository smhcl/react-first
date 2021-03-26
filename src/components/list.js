const List = () => {
    return (
        <main class="bd-main col-9">
                <h4 class="mb-4">Categories</h4>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <img src="https://i2.wp.com/literacle.com/wp-content/uploads/2018/07/stock-vector-literature-hand-drawn-vector-illustration-with-doodle-icons-images-and-objects-arranged-in-a-circle-477961258.jpg?fit=450%2C444&ssl=1"
                                class="card-img-top" alt="Literature" />
                            <div class="card-body">
                                <h5 class="card-title">Literature</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#l" class="btn btn-primary">Literature</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <img src="https://theengineer.markallengroup.com/production/2020/01/scifi-eye-stock.adobe_.com-James-Thew.jpg"
                                class="card-img-top" alt="Sci FI" />
                            <div class="card-body">
                                <h5 class="card-title">Sci Fi</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" class="btn btn-primary">Sci Fi</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <img src="https://media.gettyimages.com/photos/distant-castle-near-waterfall-picture-id740520739?s=612x612"
                                class="card-img-top" alt="Fantasy" />
                            <div class="card-body">
                                <h5 class="card-title">Fantasy</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" class="btn btn-primary">Fantasy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
}

export default List;
