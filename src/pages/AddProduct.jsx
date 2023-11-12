import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";


const AddProduct = () => {
    const axios = useAxios()
    const handleFormSubmit =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const imageUrl = form.url.value
        const brand = form.brand.value
        const price = form.price.value
        const rating = form.rating.value
        const productDescription  = form.productDescription.value
        const product = {
          name,
          imageUrl,
          brand,
          price,
          rating,
          productDescription,
        };
        axios.post('/products', product)
        .then(res =>{
            
            if (res.data.insertedId) {
                Swal.fire("Product Added Successfully",);
            }else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong! Try again later",
                 
                });
            }
        })

    }
    return (
      <div>
        <form className="card-body" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              name="brand"
            >
              <option disabled>select brand name?</option>
              <option value="loreal" className="capitalize">
                loreal
              </option>
              <option value={"esteelauder"} className="capitalize">
                estee lauder
              </option>
              <option value={"chaneldior"} className="capitalize">
                chanel dior
              </option>
              <option value={"urban-decay"} className="capitalize">
                urban-decay
              </option>
              <option value={"procter-gamble"} className="capitalize">
                procter-gamble
              </option>
              <option value={"revlon"} className="capitalize">
                revlon
              </option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered"
              name="url"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered"
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              min={0}
              max={5}
              placeholder="Rating (1 - 5)"
              className="input input-bordered"
              name="rating"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
                rows={8}
              className="textarea textarea-primary"
              placeholder="Bio"
              name="productDescription"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Create Product
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddProduct;