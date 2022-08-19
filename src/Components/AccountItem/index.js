import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div>
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fbc76ba07c81b5186bffb82315735b70~c5_300x300.webp?x-expires=1660878000&x-signature=dEtXnhIIoK%2FCbL1d4zxI278LdKk%3D" alt="AAA" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>AAA</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>AAA</span>
            </div>
        </div>
    </div>
  )
}

export default AccountItem