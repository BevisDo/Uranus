import classNames from 'classnames/bind';
import Card from '../../components/Card';
import styles from './Home.module.scss';
import { SliderData } from '../../components/Slider/SliderData';
import SliderImage from '../../components/Slider/SliderImage';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('content')}>
            <SliderImage slides={SliderData} />
            <Card />
        </div>
    );
}

export default Home;
