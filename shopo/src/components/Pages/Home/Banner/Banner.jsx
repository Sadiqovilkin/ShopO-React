import { useEffect } from "react";

import BannerStyled from "./Banner.module.css";
import Samsung from "../../../../assets/banner-1.png";
import SmartWatch from "../../../../assets/banner-2.png";
import Xbox from "../../../../assets/banner-3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineShoppingCart, AiOutlineSecurityScan } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { TfiCup } from "react-icons/tfi";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={BannerStyled.banner}>
      <div className="container px-3">
        <div className="row px-5">
          <div className="col-xl-8" data-aos="fade-right">
            <div className={BannerStyled.samsung}>
              <img src={Samsung} alt="" />
            </div>
          </div>
          <div className="col-xl-4" data-aos="fade-left">
            <div className="col-xl-12 px-0">
              <div className={BannerStyled.smart}>
                <img src={SmartWatch} alt="" />
              </div>
            </div>
            <div className="col-xl-12 px-0">
              <div className={BannerStyled.xbox}>
                <img src={Xbox} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-12" data-aos="fade-up">
            <div className={BannerStyled.white_col_adapt}>
              <div className={BannerStyled.mini_cart}>
                <div className={BannerStyled.mini_cart_icon}>
                  <AiOutlineShoppingCart />
                </div>
                <div className={BannerStyled.mini_cart_text}>
                  <h6>Free Shipping</h6>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className={BannerStyled.mini_cart}>
                <div className={BannerStyled.mini_cart_icon}>
                  <BiRefresh />
                </div>
                <div className={BannerStyled.mini_cart_text}>
                  <h6>Free Shipping</h6>
                  <p>Get Return within 30 days</p>
                </div>
              </div>
              <div className={BannerStyled.mini_cart}>
                <div className={BannerStyled.mini_cart_icon}>
                  <AiOutlineSecurityScan />
                </div>
                <div className={BannerStyled.mini_cart_text}>
                  <h6>Free Shipping</h6>
                  <p>100% Secure Online Payment</p>
                </div>
              </div>
              <div className={BannerStyled.mini_cart}>
                <div className={BannerStyled.mini_cart_icon}>
                  <TfiCup />
                </div>
                <div className={BannerStyled.mini_cart_text}>
                  <h6>Free Shipping</h6>
                  <p>Original Product Guarenteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
