import classNames from 'classnames/bind';
import { Fragment } from 'react';
import Card from '../../components/Layout/components/Card';
import { CoursesData } from './CoursesData';
import styles from './Home.module.scss';
import { SliderData } from './SliderData';
import SliderImage from './SliderImage';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('content-home')}>
            <SliderImage slides={SliderData} />
            <Card cards={CoursesData} />
        </div>
    );
}

export default Home;
