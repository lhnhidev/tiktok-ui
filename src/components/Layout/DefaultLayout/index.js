import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
