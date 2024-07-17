import scss from "./ProductCard.module.scss";
import { FC } from "react";
import { IProduct } from "../../../types";
import { useAppDispatch } from "../../../redux/store";
import { detail, removeProduct } from "../../../redux/features/productSlice";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { MdEditNote } from "react-icons/md";
const ProductCard: FC<IProduct> = (props) => {
  const { image, title, type, price, rating, _id } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={scss.ProductCard}>
      <span
        onClick={() => dispatch(removeProduct(_id))}
        style={{
          fontSize: "35px",
          position: "absolute",
          top: "0",
          right: "0",
          color: "red",
        }}
      >
        <CgCloseO />
      </span>
      <span
        onClick={() => {
          navigate(`/edit/${props._id}`);
        }}
        style={{
          fontSize: "45px",
          position: "absolute",
          top: "-5px",
          right: "70px",
          color: "black",
          cursor: "alias",
        }}
      >
        <MdEditNote />
      </span>
      <div
        onClick={() => {
          navigate("/detail");
          dispatch(detail(props));
        }}
        className={scss.content}
      >
        <span className={scss.type}>{type}</span>
        <div className={scss.image}>
          <img src={image} alt="img" />
        </div>
        <div className={scss.text}>
          <h5>{title}</h5>
          <div className={scss.line}></div>
          <div className={scss.price_rating}>
            <span>${price}</span>
            <div className={scss.rating}>
              <span>
                <FaStar style={{ color: rating! >= 1 ? "gold" : "gray" }} />
              </span>
              <span>
                <FaStar style={{ color: rating! >= 2 ? "gold" : "gray" }} />
              </span>
              <span>
                <FaStar style={{ color: rating! >= 3 ? "gold" : "gray" }} />
              </span>
              <span>
                <FaStar style={{ color: rating! >= 4 ? "gold" : "gray" }} />
              </span>
              <span>
                <FaStar style={{ color: rating! >= 5 ? "gold" : "gray" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
