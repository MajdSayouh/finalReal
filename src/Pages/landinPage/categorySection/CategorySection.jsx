import { Link } from "react-router-dom";
import cardImage from "../../../assets/download.jpeg";
// import { useState } from "react";
import "../landingPage.css";
// import styles from "./CategorySection.module.css";
import styles from "../../pages.module.css";
const CategorySection = () => {
  // const [cards, setCards] = useState([]);
  // console.log(cards);
  // const CardItems = cards.map((card) => (
  //   <div className="col-xs-12 col-sm-6 col-md-3" key={card}>
  //     Column
  //   </div>
  // ));

  return (
    <div className="bg-light pt-5">
      <div className="container ">
        <div className="text-center">
          <h3>تصنيف حسب الفئة:</h3>
        </div>
        <div className="container text-center pt-5">
          <div className="row g-3 d-flex align-items-center justify-content-center">
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img
                    src="https://masaakin.com/wp-content/uploads/listing-uploads/gallery/2023/04/5.jpg"
                    className={styles.categoryImage}
                  />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>فيلا / منزل</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img
                    src="https://masaakin.com/wp-content/uploads/listing-uploads/gallery/2023/07/1.jpg"
                    className={styles.categoryImage}
                  />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>شقة</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img
                    src="https://masaakin.com/wp-content/uploads/listing-uploads/gallery/2023/07/382798410-800x600-1.webp"
                    className={styles.categoryImage}
                  />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>مبنى</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-6 col-xl-3">
              <div className={styles.categoryCard}>
                <Link>
                  <img
                    src="https://th.bing.com/th/id/OIP.bGY56M9ZyHRL7etdGV2_4AHaFC?w=1000&h=681&rs=1&pid=ImgDetMain"
                    className={styles.categoryImage}
                  />
                  <div className={styles.overlay}>
                    <h5 className={styles.text}>مزرعة</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
      </div>
    </div>
  );
};

export default CategorySection;
