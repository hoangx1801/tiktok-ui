import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} primary small>
                        Follow
                    </Button>
                </div>
            </header>
            <section>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>1.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </section>
        </div>
    );
}

export default AccountPreview;
