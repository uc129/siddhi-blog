import '../admin.styles.css'
import { useEffect, useState } from "react";
import { useMutation } from 'react-query'
import axiosClient from '../../../utils/axiosClient';
import Elephant from '../../elephant';

//client:  http://localhost:4000/api/v1
// categories:/blog/categories
const CreatePostCategory = () => {
    // blog/categories
    // const mutation = useMutation(newCategory => {
    //     return axiosClient.post('/blog/categories/create', formData)
    // })

    const mutation = useMutation(catData => {
        return axiosClient.post('/blog/categories/create', formData)
    })

    const [active, setActive] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        active: true
    })

    const [errors, setErrors] = useState({
        name: '',
        description: '',
    })

    const handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setErrors({ ...errors, [name]: '' })
        setFormData({ ...formData, [name]: value })
        // console.log(formData);
    }

    const handleSelection = (e) => {
        let value = e.target.value;
        if (value === 'active') setActive(true)
        else setActive(false)
        // console.log(active);
    }


    const validateForm = () => {
        if (formData.name === '') {
            setErrors({ ...errors, name: 'Name is required' })
            return false;
        }
        else if (formData.description === '') {
            setErrors({ ...errors, description: 'Description is required' })
            return false;
        }
        else {
            setErrors({ ...errors, name: '', description: '' })
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = validateForm();
        if (!valid) return;
        // console.log(formData);

        const formData = new FormData();
        formData.append('name', formData.name);
        formData.append('description', formData.description);
        formData.append('active', formData.active);
        mutation.mutate(formData)
    }

    useEffect(() => {
        if (mutation.status === 'success') {
            setFormData({ name: '', description: '', active: true })
            document.getElementById('name').value = '';
            document.getElementById('description').value = '';
            window.location.reload();
        }
    }, [mutation.status])


    return (
        <div className="w-full  bg-white text-gray-600 text-sm p-8 mx-auto" >
            <h3 className=' text-center  pb-4 underline underline-offset-2 '>Create Post Category</h3>

            <form className="flex flex-col w-full ">

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name' className="form-control"
                        onChange={handleChange}
                    />
                    {errors.name && <span className='text-red-500'>{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" id="description" name='description' className="form-control -mt-[0.1em]"
                        onChange={handleChange}
                    />
                    {errors.description && <span className='text-red-500'>{errors.description}</span>}
                </div>


                <div className="active w-full flex justify-around items-center gap-4">
                    <label htmlFor='status'>Status</label>
                    <div className='h-[1px] w-12 lg:w-28 xl:w-72 bg-black'></div>
                    <select defaultValue={active} onChange={handleSelection} className={`${active ? 'bg-yellow-200 text-black hover:text-green-600' : 'bg-red-300 text-black hover:text-red-600'}`}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

            </form>

            <button type='submit' onClick={handleSubmit} className=' border-[1px] bg-black border-white rounded-lg mt-4 w-full'> Submit</button>

            {mutation.isLoading && <p className='text-yellow-500'> <div className=' scale-[10%]'> <Elephant /> </div> </p>}
            {mutation.isError && <p className='text-red-500'>Error...{mutation.error.message}</p>}
            {mutation.isSuccess && <p className='text-green-500'>Success...</p>}

        </div>
    );
}

export default CreatePostCategory;
