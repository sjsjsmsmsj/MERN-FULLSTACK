import React from 'react'
import {
    Button,
    Label,
    TextInput,
    Textarea,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableHeadCell,
    TableBody,
} from "flowbite-react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'sweetalert2/src/sweetalert2.scss'

export default function EnquiryList({ data, getAllEnquiry, Swal, setFormData }) {

    const deleteRow = (id) => {
        Swal.fire({
            title: "Do you want to delete this enquiry?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8020/api/website/enquiry/delete/${id}`).then((res) => {
                    toast.success("Enquiry Deleted Succesfully")
                    getAllEnquiry();
                }).catch((err) => {
                    console.log(err);
                })
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }



    const editEnquiry = (item) => {
        setFormData({
            name: item.name,
            email: item.email,
            phone: item.phone,
            message: item.message,
            _id: item._id // RẤT QUAN TRỌNG
        });
    };



    return (
        <div className='p-4 bg-gray-200'>

            <h2 className='text-[20px] font-bold mb-4'>Enquiry List</h2>

            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Sr No</TableHeadCell>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Email</TableHeadCell>
                            <TableHeadCell>Phone</TableHeadCell>
                            <TableHeadCell>Message</TableHeadCell>
                            <TableHeadCell>Delete</TableHeadCell>
                            <TableHeadCell>Edit</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {
                            data.length >= 1 ?
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <TableRow key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800" >
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell>{item.phone}</TableCell>
                                                <TableCell>{item.message}</TableCell>
                                                <TableCell><Button color="failure"
                                                    onClick={() => deleteRow(item._id)}
                                                >Delete</Button></TableCell>
                                                <TableCell><Button
                                                    color="info"
                                                    onClick={() => editEnquiry(item)}
                                                >Edit</Button></TableCell>

                                            </TableRow>
                                        </>
                                    )
                                }) : <TableRow className="'bg-white' dark:border-gray-700 dark:bg-gray: 800" >
                                    <TableCell colSpan={7} className='text-center'>No Data Found</TableCell>
                                </TableRow>
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
