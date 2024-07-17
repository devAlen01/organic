import { useState } from "react";
import Header from "../Layout/Header/Header";
import scss from "./Admin.module.scss";
import { useAppDispatch } from "../../../redux/store";
import { postReq } from "../../../redux/features/productSlice";
const Admin = () => {
  const dispatch = useAppDispatch();
  const [inputValues, setInputValues] = useState({
    image: "",
    title: "",
    price: "",
    desc: "",
    type: "",
  });

  const createProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputValues.desc.trim() &&
      inputValues.image.trim() &&
      inputValues.price &&
      inputValues.title.trim() &&
      inputValues.type.trim() !== ""
    ) {
      let newProduct = {
        ...inputValues,
        rating: Math.floor(Math.random() * 5),
      };
      dispatch(postReq(newProduct));
      setInputValues({
        desc: "",
        image: "",
        price: "",
        title: "",
        type: "",
      });
    } else {
      alert("Error");
    }
  };
  return (
    <>
      <Header />
      <section className={scss.Admin}>
        <div className="container">
          <div className={scss.content}>
            <form onSubmit={createProduct}>
              <h1>Create Product</h1>
              <div className={scss.inputs}>
                <input
                  onChange={(e) =>
                    setInputValues({ ...inputValues, image: e.target.value })
                  }
                  value={inputValues.image}
                  type="text"
                  placeholder="URL Image"
                />
                <input
                  onChange={(e) =>
                    setInputValues({ ...inputValues, title: e.target.value })
                  }
                  value={inputValues.title}
                  type="text"
                  placeholder="Title"
                />
                <input
                  onChange={(e) =>
                    setInputValues({ ...inputValues, price: e.target.value })
                  }
                  value={inputValues.price}
                  type="number"
                  placeholder="Price"
                />
                <input
                  value={inputValues.desc}
                  onChange={(e) =>
                    setInputValues({ ...inputValues, desc: e.target.value })
                  }
                  type="text"
                  placeholder="Description"
                />
                <select
                  onChange={(e) =>
                    setInputValues({ ...inputValues, type: e.target.value })
                  }
                >
                  <option value="VEGE">Vegetable</option>
                  <option value="FRESH">Fresh</option>
                  <option value="MILL">Millets</option>
                  <option value="NUTS">Nuts</option>
                  <option value="HEALTH">Health</option>
                </select>
                <button className={scss.btn}>Create</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
