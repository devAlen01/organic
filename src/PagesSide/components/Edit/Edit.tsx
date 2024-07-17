import { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import scss from "./Edit.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  editPostReq,
  getOneProduct,
} from "../../../redux/features/productSlice";
import { useParams } from "react-router-dom";
const Edit = () => {
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getOneProduct(_id));
  }, [_id]);

  const { oneProduct } = useAppSelector((state) => state.productSlice);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState<number | string>();
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (oneProduct) {
      setImage(oneProduct.image);
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setType(oneProduct.type);
      setDesc(oneProduct.desc);
    }
  }, [oneProduct]);

  function handleClickSave(e: React.FormEvent) {
    e.preventDefault();
    let newObj = {
      image,
      title,
      type,
      price,
      desc,
    };
    dispatch(editPostReq({ id: _id, newObj }));
    setImage("");
    setTitle("");
    setPrice("");
    setType("");
    setDesc("");
  }

  return (
    <>
      <Header />
      <section className={scss.Edit}>
        <div className="container">
          <div className={scss.content}>
            <form onSubmit={handleClickSave}>
              <h1>Edit</h1>
              <div className={scss.inputs}>
                <input
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  type="text"
                  placeholder="URL Image"
                />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="Title"
                />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="number"
                  placeholder="Price"
                />
                <input
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                  type="text"
                  placeholder="Description"
                />
                <select onChange={(e) => setType(e.target.value)} value={type}>
                  <option value="VEGE">Vegetable</option>
                  <option value="FRESH">Fresh</option>
                  <option value="MILL">Millets</option>
                  <option value="NUTS">Nuts</option>
                  <option value="HEALTH">Health</option>
                </select>
                <button className={scss.btn}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edit;
