const AddCoffe = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Coffe</h2>
            {/* form name and quantity row */}
            <form>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffe name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Avalable Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </form>
            {/* form supplier and taste row */}
            <form>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </form>
            {/* form Category and details  row */}
            <form>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </form>
            {/* form Photo URL row */}
            <form>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo  URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
            </form>
            <input className="btn btn-block bg-black text-white" type="submit" value="Add Coffe" />
        </div>
    );
};

export default AddCoffe;