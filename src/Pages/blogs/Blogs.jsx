// import { Link } from "react-router-dom";
import styles from "../pages.module.css";
import cardImage from "../../assets/download.jpeg";
import ShowAll from "../../components/ShowAll/ShowAll";
function Blogs() {
  const blogs = [
    {
      title: "hgfcxxcvbn",
      desc: "kjhgfdsdfghj",
    },
    {
      title: "hgfcxxcvbn",
      desc: "kjhgfdsdfghj",
    },
    {
      title: "hgfcxxcvbn",
      desc: "kjhgfdsdfghj",
    },
  ];
  const showBlogs = blogs.map((blog, idx) => (
    <div className="col-4 col-md-3 col-sm-12 col-lg-4 col-xl-4" key={idx}>
      <div className={`${styles.cardRent} ${styles.card}`}>
        <img src={cardImage} className={styles.RentImage} />
        <div className="p-3 text-center">
          <h6>{blog.title}</h6>
          <i>{blog.desc}</i>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-light pt-5">
      <div className="container">
        <div className="text-center">
          <h3>Blogs:</h3>
        </div>
        <div className="row text-center pt-5">
          {blogs.length <= 3 && showBlogs}
        </div>
        <div className="pt-4 d-flex align-items-center justify-content-center">
          <ShowAll size="lg">
            Show All Blogs.. <span>👉🏼</span>
          </ShowAll>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
