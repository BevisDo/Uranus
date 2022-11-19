import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { MenuItems } from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('nav-logo')}>
                        <svg width="52" height="69" viewBox="0 0 52 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.4321 0H0.816823V30.9024C0.816823 44.5915 11.914 55.6887 25.6031 55.6887C39.2922 55.6887 50.3894 44.5915 50.3894 30.9024V0H34.5261V15.9667L30.4725 15.4548C33.744 16.4203 36.5527 18.4648 38.4867 21.1763C41.3118 20.8594 43.2234 21.1824 43.6808 22.2374C44.1357 23.2865 43.0795 24.8903 40.9416 26.723C41.1651 27.756 41.2828 28.8283 41.2828 29.9281C41.2828 38.2613 34.5274 45.0166 26.1943 45.0166C24.4476 45.0166 22.7702 44.7198 21.2098 44.1739C19.6822 43.6395 19.6635 41.6635 21.0249 40.7886C26.0356 37.5689 29.054 35.3951 30.3216 33.8181C30.4793 33.622 30.287 33.3776 30.0473 33.4545L29.6922 33.5685C28.9453 33.9203 28.1791 34.2669 27.396 34.6064C17.3322 38.97 8.30656 40.507 7.2366 38.0393C6.69462 36.7893 8.29795 34.7516 11.3203 32.4777C11.1793 31.6489 11.1058 30.7971 11.1058 29.9281C11.1058 23.5154 15.1063 18.0371 20.7478 15.8526L16.4321 16.3705V0ZM45.1127 35.9476C45.2894 36.7121 44.8128 37.4752 44.0482 37.6518C43.2836 37.8285 42.5206 37.3519 42.3439 36.5873C42.1672 35.8228 42.6438 35.0597 43.4084 34.8831C44.173 34.7064 44.936 35.183 45.1127 35.9476ZM9.33265 21.3452C10.1174 21.3452 10.7535 20.709 10.7535 19.9243C10.7535 19.1396 10.1174 18.5035 9.33265 18.5035C8.54793 18.5035 7.91179 19.1396 7.91179 19.9243C7.91179 20.709 8.54793 21.3452 9.33265 21.3452ZM7.91197 28.1337C7.91197 28.5696 7.55856 28.9231 7.1226 28.9231C6.68665 28.9231 6.33324 28.5696 6.33324 28.1337C6.33324 27.6977 6.68665 27.3443 7.1226 27.3443C7.55856 27.3443 7.91197 27.6977 7.91197 28.1337ZM40.7484 42.3035C41.0883 42.2249 41.3001 41.8858 41.2215 41.546C41.143 41.2062 40.8039 40.9944 40.4641 41.0729C40.1243 41.1514 39.9125 41.4905 39.991 41.8304C40.0695 42.1702 40.4086 42.382 40.7484 42.3035ZM5.39839 67.1458C5.39839 67.4369 5.3256 67.7038 5.18003 67.9464C5.03445 68.189 4.84035 68.3831 4.59773 68.5287C4.35511 68.6743 4.08822 68.7471 3.79707 68.7471H1.61345C1.3223 68.7471 1.05137 68.6743 0.800662 68.5287C0.558037 68.3831 0.363938 68.189 0.218364 67.9464C0.072789 67.7038 0 67.4369 0 67.1458V61.1044C0 60.9427 0.0525703 60.8092 0.157707 60.7041C0.270932 60.599 0.404375 60.5464 0.558037 60.5464H0.897711C1.05137 60.5464 1.18077 60.599 1.28591 60.7041C1.39913 60.8092 1.45575 60.9427 1.45575 61.1044V67.1458C1.45575 67.1862 1.47192 67.2266 1.50427 67.2671C1.53662 67.2994 1.57302 67.3156 1.61345 67.3156H3.79707C3.83751 67.3156 3.8739 67.2994 3.90625 67.2671C3.9386 67.2266 3.95478 67.1862 3.95478 67.1458V61.1044C3.95478 60.9427 4.00734 60.8092 4.11248 60.7041C4.22571 60.599 4.35915 60.5464 4.51281 60.5464H4.84035C5.0021 60.5464 5.13555 60.599 5.24068 60.7041C5.34582 60.8092 5.39839 60.9427 5.39839 61.1044V67.1458ZM14.4285 67.9828C14.5093 68.1688 14.4972 68.3387 14.3921 68.4923C14.2708 68.6622 14.1171 68.7471 13.9311 68.7471H13.5671C13.462 68.7471 13.3569 68.7147 13.2517 68.65C13.1547 68.5853 13.0859 68.5045 13.0455 68.4074L11.9052 65.6779C11.8647 65.5808 11.7919 65.5323 11.6868 65.5323H10.5586C10.4535 65.5323 10.4009 65.5849 10.4009 65.69V68.189C10.4009 68.3427 10.3443 68.4762 10.2311 68.5894C10.1259 68.6945 9.99653 68.7471 9.84287 68.7471H9.50319C9.34953 68.7471 9.22013 68.6945 9.115 68.5894C9.01795 68.4762 8.96942 68.3427 8.96942 68.189V61.1044C8.96942 60.9427 9.01795 60.8092 9.115 60.7041C9.22013 60.599 9.34953 60.5464 9.50319 60.5464H12.7908C13.0819 60.5464 13.3488 60.6192 13.5914 60.7647C13.834 60.9103 14.0281 61.1044 14.1737 61.347C14.3193 61.5897 14.3921 61.8606 14.3921 62.1598V63.931C14.3921 64.2464 14.3072 64.5335 14.1373 64.7923C13.9756 65.043 13.7612 65.2371 13.4944 65.3746C13.462 65.3827 13.4377 65.411 13.4216 65.4595C13.4054 65.5 13.4094 65.5404 13.4337 65.5808L14.4285 67.9828ZM12.9485 63.931V62.1598C12.9485 62.0466 12.8959 61.99 12.7908 61.99H10.5586C10.4535 61.99 10.4009 62.0426 10.4009 62.1477V63.931C10.4009 64.0361 10.4535 64.0887 10.5586 64.0887H12.7908C12.8959 64.0887 12.9485 64.0361 12.9485 63.931ZM24.2919 68.0192C24.3404 68.2052 24.3121 68.3751 24.207 68.5287C24.1018 68.6743 23.9522 68.7471 23.7581 68.7471H23.4063C23.2931 68.7471 23.1839 68.7107 23.0788 68.6379C22.9817 68.5651 22.913 68.4762 22.8725 68.371L22.4116 66.9759C22.3792 66.8708 22.3105 66.8182 22.2053 66.8182H20.1309C20.0258 66.8182 19.957 66.8708 19.9247 66.9759L19.4637 68.371C19.4232 68.4762 19.3545 68.5651 19.2574 68.6379C19.1604 68.7107 19.0512 68.7471 18.9299 68.7471H18.5781C18.384 68.7471 18.2344 68.6743 18.1292 68.5287C18.016 68.367 17.9918 68.1971 18.0565 68.0192L20.4099 60.9225C20.4503 60.8092 20.515 60.7203 20.604 60.6556C20.7011 60.5828 20.8062 60.5464 20.9194 60.5464H21.4168C21.53 60.5464 21.6352 60.5828 21.7322 60.6556C21.8293 60.7203 21.894 60.8092 21.9263 60.9225L24.2919 68.0192ZM21.8414 65.229L21.2348 63.373C21.1944 63.3163 21.1499 63.3163 21.1014 63.373L20.4948 65.229C20.4787 65.2695 20.4827 65.3059 20.507 65.3382C20.5312 65.3706 20.5636 65.3867 20.604 65.3867H21.7322C21.7726 65.3867 21.805 65.3706 21.8293 65.3382C21.8535 65.3059 21.8576 65.2695 21.8414 65.229ZM33.3858 68.189C33.3858 68.3427 33.3292 68.4762 33.216 68.5894C33.1109 68.6945 32.9815 68.7471 32.8278 68.7471H32.476C32.2576 68.7471 32.0959 68.6541 31.9908 68.4681L29.4068 63.9916C29.3906 63.9593 29.3664 63.9512 29.334 63.9674C29.3017 63.9755 29.2855 63.9916 29.2855 64.0159V68.189C29.2855 68.3427 29.2289 68.4762 29.1157 68.5894C29.0105 68.6945 28.8852 68.7471 28.7396 68.7471H28.3999C28.2463 68.7471 28.1128 68.6945 27.9996 68.5894C27.8945 68.4762 27.8419 68.3427 27.8419 68.189V61.1044C27.8419 60.9427 27.8945 60.8092 27.9996 60.7041C28.1128 60.599 28.2463 60.5464 28.3999 60.5464H28.7517C28.9701 60.5464 29.1318 60.6394 29.237 60.8254L31.8209 65.3018C31.8452 65.3342 31.8694 65.3463 31.8937 65.3382C31.9261 65.3301 31.9422 65.3099 31.9422 65.2776V61.1044C31.9422 60.9427 31.9948 60.8092 32.0999 60.7041C32.2132 60.599 32.3466 60.5464 32.5003 60.5464H32.8278C32.9815 60.5464 33.1109 60.599 33.216 60.7041C33.3292 60.8092 33.3858 60.9427 33.3858 61.1044V68.189ZM42.3152 67.1458C42.3152 67.4369 42.2424 67.7038 42.0968 67.9464C41.9512 68.189 41.7571 68.3831 41.5145 68.5287C41.2719 68.6743 41.005 68.7471 40.7139 68.7471H38.5302C38.2391 68.7471 37.9682 68.6743 37.7174 68.5287C37.4748 68.3831 37.2807 68.189 37.1352 67.9464C36.9896 67.7038 36.9168 67.4369 36.9168 67.1458V61.1044C36.9168 60.9427 36.9694 60.8092 37.0745 60.7041C37.1877 60.599 37.3212 60.5464 37.4748 60.5464H37.8145C37.9682 60.5464 38.0976 60.599 38.2027 60.7041C38.3159 60.8092 38.3725 60.9427 38.3725 61.1044V67.1458C38.3725 67.1862 38.3887 67.2266 38.4211 67.2671C38.4534 67.2994 38.4898 67.3156 38.5302 67.3156H40.7139C40.7543 67.3156 40.7907 67.2994 40.823 67.2671C40.8554 67.2266 40.8716 67.1862 40.8716 67.1458V61.1044C40.8716 60.9427 40.9241 60.8092 41.0293 60.7041C41.1425 60.599 41.2759 60.5464 41.4296 60.5464H41.7571C41.9189 60.5464 42.0523 60.599 42.1575 60.7041C42.2626 60.8092 42.3152 60.9427 42.3152 61.1044V67.1458ZM51.4059 67.1458C51.4059 67.4369 51.3331 67.7038 51.1875 67.9464C51.042 68.189 50.8479 68.3831 50.6052 68.5287C50.3626 68.6743 50.0957 68.7471 49.8046 68.7471H47.4754C47.1842 68.7471 46.9133 68.6743 46.6626 68.5287C46.42 68.3831 46.2259 68.189 46.0803 67.9464C45.9347 67.7038 45.8619 67.4369 45.8619 67.1458V66.7818C45.8619 66.6282 45.9145 66.4988 46.0196 66.3936C46.1329 66.2804 46.2663 66.2238 46.42 66.2238H46.7597C46.9052 66.2238 47.0306 66.2804 47.1357 66.3936C47.2489 66.4988 47.3056 66.6282 47.3056 66.7818V67.1458C47.3056 67.1862 47.3217 67.2266 47.3541 67.2671C47.3945 67.2994 47.435 67.3156 47.4754 67.3156H49.8046C49.845 67.3156 49.8814 67.2994 49.9138 67.2671C49.9461 67.2266 49.9623 67.1862 49.9623 67.1458V66.0418C49.9623 65.9529 49.9219 65.8962 49.841 65.872L46.9295 64.7802C46.606 64.667 46.3472 64.4688 46.1531 64.1858C45.959 63.9027 45.8619 63.5913 45.8619 63.2516V62.1598C45.8619 61.8606 45.9347 61.5897 46.0803 61.347C46.2259 61.1044 46.42 60.9103 46.6626 60.7647C46.9133 60.6192 47.1842 60.5464 47.4754 60.5464H49.8046C50.0957 60.5464 50.3626 60.6192 50.6052 60.7647C50.8479 60.9103 51.042 61.1044 51.1875 61.347C51.3331 61.5897 51.4059 61.8606 51.4059 62.1598V62.4874C51.4059 62.641 51.3493 62.7704 51.2361 62.8756C51.1309 62.9807 51.0015 63.0333 50.8479 63.0333H50.5203C50.3667 63.0333 50.2332 62.9807 50.12 62.8756C50.0149 62.7704 49.9623 62.641 49.9623 62.4874V62.1598C49.9623 62.0466 49.9097 61.99 49.8046 61.99H47.4754C47.435 61.99 47.3945 62.0062 47.3541 62.0385C47.3217 62.0709 47.3056 62.1113 47.3056 62.1598V63.2516C47.3056 63.3487 47.346 63.4094 47.4269 63.4336L50.3505 64.5254C50.6659 64.6386 50.9207 64.8368 51.1148 65.1199C51.3089 65.4029 51.4059 65.7102 51.4059 66.0418V67.1458ZM33.0191 35.8879C32.9633 35.8285 32.9275 35.7531 32.9169 35.6724L32.3753 32.2887C32.3624 32.2087 32.3263 32.1343 32.2715 32.0747C32.2167 32.015 32.1457 31.9727 32.0671 31.953L28.742 31.1247C28.6544 31.1018 28.5768 31.0508 28.5209 30.9797C28.465 30.9085 28.4339 30.8209 28.4325 30.7304C28.431 30.6399 28.4593 30.5515 28.5128 30.4785C28.5664 30.4056 28.6424 30.3522 28.7292 30.3265L35.8542 28.2852C35.9277 28.2649 36.0054 28.2653 36.0787 28.2863C36.152 28.3073 36.218 28.3482 36.2696 28.4044C36.3212 28.4605 36.3562 28.5299 36.3709 28.6047C36.3856 28.6795 36.3794 28.7569 36.3529 28.8284L33.711 35.7532C33.6787 35.839 33.6189 35.9116 33.541 35.9597C33.4631 36.0078 33.3714 36.0288 33.2803 36.0193C33.1801 36.0087 33.0873 35.962 33.0191 35.8879ZM29.1301 23.2412C29.1875 23.1697 29.2113 23.0901 29.2016 23.0027L28.7557 18.9695C28.7456 18.8774 28.7049 18.805 28.6339 18.7523C28.5674 18.699 28.4904 18.6773 28.4029 18.6869L28.2165 18.7075C28.129 18.7172 28.0563 18.7555 27.9985 18.8225C27.9453 18.889 27.9237 18.9683 27.9339 19.0603L28.1966 21.436C28.1986 21.4545 28.1907 21.467 28.1728 21.4736C28.1594 21.4798 28.1449 21.4744 28.129 21.4575L26.3763 19.0718C26.3047 18.9725 26.2068 18.9297 26.0825 18.9435L25.8822 18.9656C25.7947 18.9753 25.7221 19.0136 25.6642 19.0806C25.611 19.147 25.5895 19.2263 25.5997 19.3184L26.0455 23.3516C26.0552 23.439 26.0935 23.5117 26.1605 23.5695C26.2316 23.6223 26.3109 23.6438 26.3983 23.6341L26.5917 23.6128C26.6746 23.6036 26.7426 23.5658 26.7959 23.4993C26.8532 23.4277 26.877 23.3482 26.8674 23.2607L26.6047 20.885C26.6032 20.8712 26.6114 20.861 26.6293 20.8543C26.6467 20.8431 26.661 20.8462 26.6723 20.8636L28.425 23.2493C28.4965 23.3486 28.5945 23.3913 28.7188 23.3776L28.9191 23.3555C29.0065 23.3458 29.0769 23.3077 29.1301 23.2412ZM23.8586 28.5001C24.04 28.5909 24.1397 28.7289 24.1576 28.9142C24.1735 29.1223 24.1102 29.2861 23.9675 29.4054L23.6883 29.6389C23.6077 29.7064 23.5063 29.749 23.3841 29.7668C23.2682 29.7795 23.1636 29.7616 23.0703 29.7131L20.4443 28.351C20.351 28.3026 20.2641 28.312 20.1834 28.3795L19.3181 29.1033C19.2374 29.1708 19.2308 29.2449 19.2983 29.3255L20.9017 31.2423C21.0002 31.3602 21.0424 31.4989 21.0282 31.6584C21.015 31.8065 20.9495 31.9298 20.8317 32.0284L20.5711 32.2464C20.4532 32.3449 20.3203 32.3876 20.1722 32.3745C20.0251 32.3499 19.9022 32.2787 19.8037 32.1608L15.2581 26.7266C15.1544 26.6025 15.106 26.4691 15.113 26.3261C15.1261 26.178 15.1917 26.0547 15.3095 25.9561L17.8312 23.8468C18.0545 23.66 18.306 23.5446 18.5855 23.5006C18.865 23.4566 19.1384 23.4809 19.4057 23.5736C19.673 23.6663 19.9027 23.8274 20.0947 24.057L21.2311 25.4155C21.4334 25.6574 21.5525 25.9322 21.5883 26.2396C21.6251 26.5357 21.5852 26.8221 21.4687 27.0988C21.4491 27.1258 21.4486 27.163 21.4674 27.2106C21.4809 27.252 21.5099 27.2804 21.5545 27.2959L23.8586 28.5001ZM20.1238 26.3417L18.9874 24.9832C18.9147 24.8964 18.8381 24.8867 18.7574 24.9541L17.0453 26.3863C16.9647 26.4537 16.9581 26.5278 17.0255 26.6084L18.1697 27.9763C18.2371 28.0569 18.3112 28.0635 18.3918 27.996L20.104 26.5639C20.1846 26.4964 20.1912 26.4224 20.1238 26.3417ZM32.5406 24.4192C32.8713 24.4192 33.1394 24.1512 33.1394 23.8205C33.1394 23.4898 32.8713 23.2217 32.5406 23.2217C32.2099 23.2217 31.9419 23.4898 31.9419 23.8205C31.9419 24.1512 32.2099 24.4192 32.5406 24.4192ZM30.5056 40.5854C30.5056 41.1807 30.0231 41.6632 29.4278 41.6632C28.8326 41.6632 28.3501 41.1807 28.3501 40.5854C28.3501 39.9902 28.8326 39.5077 29.4278 39.5077C30.0231 39.5077 30.5056 39.9902 30.5056 40.5854Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </Link>
                <div className={cx('nav-menu')}>
                    <ul className={cx('item-menu')}>
                        {MenuItems.map((MenuItem, index) => (
                            <li key={index}>
                                <Link to={MenuItem.url} className={cx(MenuItem.cName)}>
                                    {MenuItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('nav-but')}>
                    <button className={cx('but')}>ENG</button>
                    <button className={cx('but')}>
                        SIGN IN <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;