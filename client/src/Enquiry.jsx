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
import { useEffect } from 'react'; // Đừng quên thêm vào đầu file
import Swal from 'sweetalert2'; // Thêm dòng này vào đầu file Enquiry.jsx
// import 'sweetalert2/src/sweetalert2.scss'



import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import EnquiryList from '../enquiry/EnquiryList.jsx'


export default function Enquiry() {
    let [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        _id: ''
    })

    let [enquiryList, setEnquiryList] = useState([]);

    let saveEnquiry = (e) => {
        e.preventDefault();

        if (formData._id) {
            axios.put(`http://localhost:8020/api/website/enquiry/update/${formData._id}`, formData)
                .then((res) => {
                    toast.success('Enquiry Updated Successfully')
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        _id: ''
                    })
                    getAllEnquiry();
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            axios.post('http://localhost:8020/api/website/enquiry/insert', formData).then((res) => {
                toast.success('Enquiry Saved Successfully')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                getAllEnquiry();
            }).catch((err) => {
                console.log(err);
            })
        }



    }

    let getAllEnquiry = () => {
        axios.get('http://localhost:8020/api/website/enquiry/view').then((res) => {
            setEnquiryList(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }



    const getValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getAllEnquiry();
    }, []);


    return (
        <div>
            <ToastContainer />
            <h1 className='text-[40px] text-center py-6 font-bold'>User Equiry</h1>

            <div className='grid grid-cols-[30%_auto] gap-10'>
                <div className='p-4 bg-gray-200'>
                    <h2 className='text-[20px] font-bold'>Enquiry Form</h2>
                    <form onSubmit={saveEnquiry}>
                        <div className='py-3'>
                            <Label htmlFor="name" value="Your Name" />
                            <TextInput type="text" onChange={getValue} name="name" value={formData.name} placeholder="Enter Your Name" required />
                        </div>
                        <div className='py-3'>
                            <Label htmlFor="email" value="Your Email" />
                            <TextInput type="email" value={formData.email} onChange={getValue} name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div className='py-3'>
                            <Label htmlFor="phone" value="Your phone" />
                            <TextInput type="text" value={formData.phone} onChange={getValue} name="phone" placeholder="Enter Your Phone" required />
                        </div>
                        <div className="py-3">
                            <Label htmlFor="message" value="Your message" />
                            <Textarea id="comment" value={formData.message} onChange={getValue} name="message" placeholder="Message..." required rows={4} />
                        </div>
                        <div className="py-3">
                            <Button type="submit" className='w-[100%]'>
                                {formData._id === "" ? "Save" : "Update"}
                            </Button>
                        </div>
                    </form>
                </div>

                <EnquiryList data={enquiryList} getAllEnquiry={getAllEnquiry} Swal={Swal} setFormData={setFormData} />

            </div>
        </div>


    )
}
