import styles from './SigninLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SigninLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default SigninLayout;
