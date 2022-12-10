import styles from './DashboardLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';

const cx = classNames.bind(styles);
function DashboardLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DashboardLayout;
