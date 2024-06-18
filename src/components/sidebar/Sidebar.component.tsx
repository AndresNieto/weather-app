import { FunctionComponent, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { BiMenu } from "react-icons/bi";

interface SidebarComponentProps {}

const SidebarComponent: FunctionComponent<SidebarComponentProps> = () => {
  const sideBarRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={classNames(styles.sidebar, isOpen ? "" : styles.close)}
        ref={sideBarRef}
      >
        <div className={styles.logoDetails}>
          <BiMenu />
          <span className={styles.logo_name}>CodingLab</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">
              <BiMenu className={styles.menuIcon} />
              <span className={styles.link_name}>Dashboard</span>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="bx bx-line-chart"></i>
              <span className={styles.link_name}>Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className={styles.link_name} href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-compass"></i>
              <span className={styles.link_name}>Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className={styles.link_name} href="#">
                  Explore
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-history"></i>
              <span className={styles.link_name}>History</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className={styles.link_name} href="#">
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className={styles.link_name}>Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className={styles.link_name} href="#">
                  Setting
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="image/profile.jpg" alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Desginer</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li> */}
        </ul>
      </div>
      <section className={styles.homeSection}>
        <div className={styles.homeContent} onClick={handleToogle}>
          <BiMenu className={styles.menuIcon} />
          <span className={styles.text}>Drop Down Sidebar</span>
        </div>
      </section>
      <div className={styles.one}></div>
    </>
  );
};

export default SidebarComponent;
