import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const { SliderData } = require('./SliderData');

const SliderImage = ({ slides }) => {
    let SlideInteval;
    let IntevalTime = 5000;
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    function AutoScroll() {
        SlideInteval = setInterval(nextSlide, IntevalTime);
    }
    useEffect(() => {
        AutoScroll();
        return () => {
            clearInterval(SlideInteval);
        };
    }, [current]);
    console.log(current);
    return (
        <section className={cx('slider')}>
            <FontAwesomeIcon icon={faChevronRight} className={cx('right-arrow')} onClick={nextSlide} />
            <FontAwesomeIcon icon={faChevronLeft} className={cx('left-arrow')} onClick={prevSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? cx('slide', 'active') : cx('slide')} key={index}>
                        {index === current && <img src={slide.image} className={cx('image')} />}
                    </div>
                );
            })}
        </section>
    );
};

export default SliderImage;
