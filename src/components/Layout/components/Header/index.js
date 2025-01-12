import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={logo.default} alt="Tiktok"></img>
                </Link>
                <div className={cx('search')}>
                    <input
                        className={cx('search-input')}
                        placeholder="Tìm kiếm"
                        spellCheck="false"
                    ></input>
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    ></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </div>

                <div className={cx('active')}></div>
            </div>
        </header>
    );
}

export default Header;
