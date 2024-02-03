const AddCoffe = () => {
    return (
        <div>
            <h2>Add Coffe</h2>
            <form>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="Coffe name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffe;