import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="" alt="AAA" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>AAA</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>AAA</span>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
