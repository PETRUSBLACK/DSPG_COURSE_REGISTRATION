import { useState } from "react";

const DataTable = () => {
    const [formData, setFormData] = useState({ name: "", gender: "", age: " "});
    const [data, setData] = useState([])

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

    };

    const handleAddClick = () => {
        if(formData.name &&  formData.gender && formData.age){
            const newItem = {
                id: Date.now(),
                name: formData.name,
                gender: formData.gender,
                age: formData.age
            };
            setData([...data, newItem]);
            setFormData({name: "", gender: "", age: ""});
        }
    };

    const handleDelete = (id) => {
        const updatedList = data.filter( (item) => item.id !== id);
        setData(updatedList)
    }
    

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
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
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

            <button className="add" onClick={handleAddClick}>ADD</button>

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
                    {
                        data.map( item => (
                    <tr key={item.id}>
                        <td id={item.id}>{item.name}</td>
                        <td id={item.id}>{item.gender}</td>
                        <td id={item.id}>{item.age}</td>
                        <td className="actions">
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={ () => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>

                        ))
                    }

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