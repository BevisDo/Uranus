import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { SliderData } from './SliderData';
import SliderImage from './SliderImage';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <SliderImage slides={SliderData} />
            </div>
        </div>
    );
}

export default Home;
