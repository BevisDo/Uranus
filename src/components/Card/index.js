import classNames from 'classnames/bind';
import { CoursesData } from '../../pages/Home/CoursesData';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card() {
    return (
        <div className={cx('cards')}>
            {CoursesData.map((card, index) => {
                return (
                    <div className={cx('card-body')} key={index}>
                        <img src={card.img} alt="" />
                        <h2 className={cx('card-title')}>{card.title}</h2>
                        <p className={cx('card-content')}>{card.content}</p>
                        <button className={cx('card-btn')}>View Details</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
