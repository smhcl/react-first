import Sidebar from './sidebar';
import List from './list';
import Login from './login';

const Content = props => {
    const { loginVisible } = props;
    return (
        <div className="wrapper container mt-3 mb-3">
            <div className="row">
                <Sidebar />
                <main className="bd-main col-9">
                    {loginVisible ? <Login /> : <List />}
                </main>
            </div>
        </div>
    );
}

export default Content;
