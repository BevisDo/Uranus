import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ad-footer')}>
                <h1>Quảng cáo</h1>
            </div>
            <div className={cx('info-footer')}>
                <ul>
                    <li className={cx('first-order')}>Service</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <ul>
                    <li className={cx('first-order')}>Help</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <ul>
                    <li className={cx('first-order')}>Contact</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <ul>
                    <li className={cx('first-order')}>Newsletter</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
