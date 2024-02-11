import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const coffe = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffe;
  const handleUpdateCoffe = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffe = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo
    };
    form.reset();
    fetch(`http://localhost:5000/coffe/${_id}`,{
        method : 'PUT',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(newCoffe)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId)
        {
            Swal.fire({
                title: 'Success!',
                text: 'Coffe added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update  Coffe : {name}</h2>
      {/* form name and quantity row */}
      <form onSubmit={handleUpdateCoffe}>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffe Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffe name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Avalable Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form Category and details  row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form Photo URL row */}

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          className="btn btn-block bg-black text-white mt-4"
          type="submit"
          value="Update Coffe"
        />
      </form>
    </div>
  );
};

export default UpdateCoffe;
