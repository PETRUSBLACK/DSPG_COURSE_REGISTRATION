const DataTable = () => {

    // const handleClick = () => {
        // alert('Button was clicked!')
        // document.getElementById("dropdown").classList.toggle("show")
    // }
    return (
    <div className="container">
        <div className="add-container">
            <div className="info-container">
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={""}
                    onChange={() => {}}
                />
                <input 
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    value={""}
                    onChange={() => {}}
                />
                <input 
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={""}
                    onChange={() => {}}
                />

                {/* <div className="dropdown">
                    <input className="dropdown-btn" onClick={handleClick} placeholder="Select Options"/>
                    <div className="dropdown-content" id="dropdown">
                        <label><input type="checkbox" value="Maths"/>Maths</label>
                        <label><input type="checkbox" value="English"/>English</label>
                        <label><input type="checkbox" value="Frech"/>Frech</label>
                    </div>

                </div> */}
            </div>

            <button className="add">ADD</button>

        </div>
        <div className="search-table-container">
            <input 
                type="text"
                placeholder="Search by name"
                name="age"
                value={""}
                onChange={() => {}}
                className="search-imput"
            />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Action</th>
                        {/* <th>Courses</th> */}

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Male</td>
                        <td>23</td>
                        <td className="actions">
                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                        </td>
                    </tr>
                </tbody>

                <div className="pagination"></div>
            </table>

        </div>
        {/* <script>
            function toggleDropdown(){
                document.getElementById("dropdown").classList.toggle("show")
            }
        </script> */}
    </div>
    
    );
}

export default DataTable;