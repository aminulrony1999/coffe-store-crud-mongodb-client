import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffe, coffes, setCoffes }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffe;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffe/${_id}`,{
          method : 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffe has been deleted.",
                icon: "success",
              });
              const remainingCoffes = coffes.filter(cof => cof._id !== _id);
              setCoffes(remainingCoffes);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-60 h-50" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <button className="btn join-item">View</button>
            <Link to={`updateCoffe/${_id}`}>
            <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
