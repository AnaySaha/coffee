import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


//     useEffect ( () =>{
//         fetch('/')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
//     }, [])

//     useEffect(() => {
//         axios.get('/')
//         .then(data=>{
//             console.log(data.data);
//         })
//     },
// [])

    const handleUserDelete = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
               
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                }); 
                  // delete from the database
             fetch(`http://localhost:5000/users/${id}`, {
                methode: 'DELETE'
             })
             .then(res = res.json())
             .then(data => {
                if(data.deletedCount){
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                    const remainingusers = users.filter(user => user._id !== id);
                    setUsers(remainingusers);
                    }

             })
            }
           
        });
    }
    return (
        <div>
            <h2 className="text-3xl">Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Last Login AT</th>
                            <th>Created At</th>
                            {/* dhur */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button
                                        onClick={() => handleUserDelete(
                                            user.id
                                        )}
                                        className='btn'>X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;