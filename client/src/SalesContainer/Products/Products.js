import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Products.css";

export default function Products(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ProductsHeading = (props) => {
    return (
      <div className="products-heading">
        <div className="products-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.suggestedMarketPrice && props.shippingCharges ? (
              <div className="cost-price">
                {props.suggestedMarketPrice + "_" + props.shippingCharges}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="products-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="products-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const productsBullets = [
    { label: "C24/7 Natura-Ceuticals", logoSrc: "icon1.svg" },
    { label: "Complete Phyto-Energizer", logoSrc: "icon2.svg" },
    { label: "Choleduz Omega Supreme", logoSrc: "icon3.svg" },
    { label: "RestorLyf: Longevity Formula", logoSrc: "icon4.svg" },
    { label: "MyChoco Alkaline Chocolate Drink", logoSrc: "icon5.svg" },
    { label: "Liven Alkaline Coffee", logoSrc: "icon1.svg" },
  ];

  const productDetails = [
    <div className="product-screen-container" key="products">
      <ProductsHeading
        heading={"About the Supplement"}
        subHeading={"This is what this supplement"}
        suggestedMarketPrice={"ZAR 480.00"}
        shippingCharges={"ZAR 100.00"}
      />
      <div className="product-description">
        <span className="product-description-text">
          Ever thought about whether there is any antioxidant supplement that
          can prevent 100 illnesses that are going to be a major reason for
          death nowadays? Try the C24/7 Natura-Ceuticals food supplement
          endorsed by the FDA and stay fit and healthy.
        </span>
      </div>
      <div className="product-description">
        <span className="product-description-text">
          Known as the best in the world for its natural antioxidant benefits,
          C24/7 Natura-Ceuticals have made many live a carefree life. With all
          the unfriendly sicknesses that spread like wildfire whilst increasing
          the cost of living, it is smarter to take preventive measures much
          before they harm you. AIM global’s flagship product, has the most
          complete day-by-day dietary necessity and the highest anti-oxidant
          components. It likewise has a most significant level of antioxidants
          with roughly 22,000 phytonutrient benefits in an all antacid vegetable
          container, which has nutrients, minerals, and follow minerals
          alongside organic products, mushrooms, stomach related catalysts,
          unsaturated fats, amino acids among others. The antioxidant benefits
          of this item have been clinically tried and have been demonstrated to
          be an effective prevention/solution to 100 diseases.
        </span>
      </div>
      <div className="product-description">
        <span className="product-description-text">
          This item with a number of ingredients is the source to keep up all
          levels properly in the body making it one of the anti-aging
          supplements as well. Every day utilization of this enhancement ends up
          being valuable to keep up fantastic wellbeing and vitality levels.
          They simultaneously give day-by-day sustenance, energizers, and
          safeguards required by the body. This is also known as the supreme
          Whole Food Energizers™. C24/7 methods complete nourishment 24 hours 7
          days per week. It redresses the cell levels and shields the cells from
          oxidation harm because of the elevated level of antioxidants present
          in it.
        </span>
      </div>
      <div className="product-description">
        <span className="product-description-text">
          C 24/7 Natura-Ceuticals contains 29 Vitamins, Minerals and Trace
          Minerals 18 Amino Acids 14 Super Green Foods / Spirulina Blend 12
          Whole Fruit Juice Blend 12 Whole Vegetable Juice Blend 12 Mushrooms 12
          Digestive Enzymes 12 Herbs and Speciality Nutrients 10 Essential Fatty
          Acids 5 Anti-Aging / Antioxidant Enhancer 4 Longevity Polyphenols /
          Mega-Resveratrol Blend
        </span>
      </div>
      <div className="product-description">
        <span className="product-description-text">
          Best Antioxidant Supplement for:
          <br />
          -Cellular Protection
          <br />
          -Cellular Immunity
          <br />
          -Cellular Energizer
          <br />
          -Cellular Enhancement
          <br />
          -Cellular Longevity
          <br />
          -Cellular Nourishment
          <br />
          -Cardio Protection
          <br />
          -Cancer Protection
          <br />
        </span>
      </div>
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    // return productsBullets.map((bullet, index) => (
    //   <div
    //     onClick={() => handleCarousel(index)}
    //     className={
    //       index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
    //     }
    //     key={index}
    //   >
    //     <img
    //       className="bullet-logo"
    //       src={require('../../Assets/Products/${bullet.logoSrc}').default}
    //       alt="oops...no internet connection"
    //     />
    //     <span className="bullet-label">{bullet.label}</span>
    //   </div>
    // ));
  };

  const getProductsScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="products-details-carousel"
      >
        {productDetails.map((productDetails) => productDetails)}
      </div>
    );
  };

  // useEffect(() => {
  //   return () => {
  //     fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  return (
    <div className="products-container screen-container" id={props.id || ""}>
      <div className="products-content">
        <ScreenHeading
          title={"Products"}
          subHeading={"Check out our Products"}
        />
        <div className="products-card">
          <div className="products-bullets">
            <div className="bullets-container">
              <div className="bullets-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="products-bullet-details">{getProductsScreens()}</div>
        </div>
      </div>
    </div>
  );
}
