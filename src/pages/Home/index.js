import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { SliderData } from './SliderData';
import SliderImage from './SliderImage';
const cx = classNames.bind(styles);

function Home() {
    return <SliderImage slides={SliderData} />;
}

export default Home;
