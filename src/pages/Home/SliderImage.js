import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const { SliderData } = require('./SliderData');

const SliderImage = (slides) => {
    const [current, setCurrent] = useState(0);
    // const length = slides.length;
    return (
        <section className={cx('slider')}>
            <FontAwesomeIcon icon={faChevronRight} className={cx('right-arrow')} />
            <FontAwesomeIcon icon={faChevronLeft} className={cx('left-arrow')} />
            {SliderData.map((slide, index) => (
                <img src={slide.image} key={index} className={cx('image')} />
            ))}
        </section>
    );
};

export default SliderImage;
