"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div
        className={`${styles.footerCopywright} ${styles.copywrightPlacement}`}
      >
        <p className={styles.footerSubContents}>
          Our friendly and knowledgeable sales staff is here to help you find
          the car you deserve and fits your budget. Thank you for the chance to
          be your used car dealership.
        </p>
        <span className={styles.footerSubContents}>
          Copyright NCA Systems | All Rights Reserved © 2023
        </span>
        <span className={styles.footerSubContents}>
          <Link className={"nextLink"} href="">
            Dealer Login
          </Link>
        </span>
      </div>
      <address className={styles.contactInfo}>
        <h4 className={styles.footerItemHeader}>Streamline Motors LLC</h4>
        <a className={styles.footerSubContents}>
          16825 48th Ave W Ste 108 Lynnwood, WA 98037
        </a>
        <iframe
          className={styles.mapEmbed}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20%20%20%20%20%20%20%20%20%2016825%2048th%20Ave%20W%20Ste%20108%20Lynnwood,%20WA%2098037+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a className={styles.footerSubContents} href="tel:+12063544790">
          <span>
            <PhoneIcon />
            {"(206)354-4790"}
          </span>
        </a>
        <a
          className={styles.footerSubContents}
          href="mailto:streamlinemotors76@gmail.com"
        >
          <span>
            <EmailIcon />
            streamlinemotors76@gmail.com
          </span>
        </a>
      </address>
      <div className={styles.operationalHours}>
        <h4 className={styles.footerItemHeader}>Hours</h4>
        <ul>
          <li className={styles.footerSubContents}>
            <span>Monday</span>
            <span>11:00AM - 7:00PM</span>
          </li>
          <li className={styles.footerSubContents}>
            <span>Tuesday</span>
            <span>11:00AM - 7:00PM</span>
          </li>
          <li className={styles.footerSubContents}>
            <span>Wednesday</span>
            <span>2:00PM - 7:00PM</span>
          </li>
          <li className={styles.footerSubContents}>
            <span>Thursday</span>
            <span>11:00AM - 7:00PM</span>
          </li>
          <li className={styles.footerSubContents}>
            <span>Friday</span>
            <span>11:00AM - 7:00PM</span>
          </li>
          <li className={styles.footerSubContents}>
            <span>Saturday</span>
            <span>CLOSED</span>
          </li>
          <li className={styles.footerSubContents}>
            <span>Sunday</span>
            <span>11:00AM - 4:00PM</span>
          </li>
        </ul>
      </div>
      <div className={styles.quickLinks}>
        <h4 className={styles.footerItemHeader}>Quick Links</h4>
        <ul>
          <li className={styles.footerSubContents}>
            <a href="https://www.facebook.com" target="_blank">
              <FacebookIcon
                className={`${styles.icon} ${styles.facebookIcon}`}
              />
            </a>
          </li>
          <li className={styles.footerSubContents}>
            <a href="https://www.instagram.com" target="_blank">
              <InstagramIcon
                className={`${styles.icon} ${styles.instagramIcon}`}
              />
            </a>
          </li>
          <li className={styles.footerSubContents}>
            <a href="https://www.twitter.com" target="_blank">
              <TwitterIcon className={`${styles.icon} ${styles.twitterIcon}`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
