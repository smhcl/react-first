import Sidebar from './sidebar';
import List from './list';

const Content = () => {
    return (
        <div class="wrapper container mt-3 mb-3">
            <div class="row">
                <Sidebar />
                <List />
            </div>
        </div>
    );
}

export default Content;
