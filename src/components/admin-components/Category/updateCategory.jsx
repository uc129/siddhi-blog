import { useEffect, useState } from "react";
import { useMutation } from 'react-query'
import axiosClient from "../../../utils/axiosClient";


const UpdateCategory = ({ currentCategory, getCurrentCategory }) => {
    const [edit, setEdit] = useState(false)
    const [current, setCurrent] = useState(currentCategory)
    const [formData, setFormData] = useState({
        _id: currentCategory._id,
        name: currentCategory.name,
        description: currentCategory.description,
        status: currentCategory.status
    })
    const [updated, setUpdated] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);


    useEffect(() => {
        setCurrent(currentCategory)
    }, [currentCategory])
    // console.log('current', current);

    const mutateCategory = useMutation(async () => {
        let form = new FormData();
        form.append('name', formData.name)
        form.append('description', formData.description)
        form.append('status', formData.status)
        // console.log('form data', formData);
        await axiosClient.post(`/blog/categories/update/${formData._id}`, formData).then(() => setUpdated(true)).catch(err => console.log(err))
    })






    useEffect(() => {
        if (updated && mutateCategory.isSuccess) window.location.href = `/admin?category=${current.name}`
    }, [mutateCategory.isSuccess, current.name, updated])

    const handleUpdate = (e) => {
        e.preventDefault()
        getCurrentCategory(current)
        setEdit(!edit)
        mutateCategory.mutate(formData)
    }


    const handleDelete = async (e) => {
        e.preventDefault();
        setDeleteClicked(true);
    }

    const deleteCategory = async () => {
        await axiosClient.delete(`/blog/categories/delete/${current._id}`)
            .then(() => window.location.href = '/admin').catch(err => console.log(err))
    }









    return (
        <>
            <div id='category-detail' className="recent  max-h-[40%] min-h-[500px] hidden xl:block  overflow-scroll  mx-auto ">

                <h3 className="text-center  underline underline-offset-2">Category Detail</h3>
                <div className="list mt-8">
                    {
                        current &&
                        <div className="text-center flex flex-col gap-2 w-[80%] mx-auto">
                            <input type="text" name="update-name" id="update-name"
                                className="outline-none focus:border-2 text-center
                                            focus:border-green-400 rounded-xl"
                                onChange={(e) => {
                                    setCurrent({ ...current, name: e.target.value });
                                    setFormData({ ...formData, name: e.target.value })
                                }}

                                value={current.name}
                                disabled={!edit} />

                            <input type="text" name="update-description" id="update-desc"
                                className="outline-none focus:border-2 text-center focus:border-green-400 rounded-xl"
                                // onChange={(e) => setCurrent({ ...current, description: e.target.value })}
                                onChange={(e) => {
                                    setCurrent({ ...current, description: e.target.value });
                                    setFormData({ ...formData, description: e.target.value })
                                }}


                                value={current.description}
                                disabled={!edit} />

                            <select defaultValue={current.status} name="update-status" id="update-status"
                                className="outline-none focus:border-2 text-center focus:border-green-400 rounded-xl"
                                // onChange={(e) => setCurrent({ ...current, status: e.target.value })}
                                onChange={(e) => {
                                    setCurrent({ ...current, status: e.target.value });
                                    setFormData({ ...formData, status: e.target.value })
                                }}


                                disabled={!edit}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>

                            <div className="flex gap-2 flex-wrap p-4 justify-between ">
                                {Object.keys(current.meta).map(key => {
                                    return (
                                        <div key={key}>
                                            <p>{key}</p>
                                            <p>{current.meta[key]}</p>
                                        </div>
                                    )
                                })
                                }
                            </div>

                            {!deleteClicked && <div className="flex justify-between p-10">
                                {!edit && <button onClick={(e) => { e.preventDefault(); setEdit(!edit) }}
                                    className="bg-yellow-600 text-white p-1 rounded-lg mr-2">Edit</button>}

                                {edit &&
                                    <>
                                        <button onClick={handleUpdate}> Save </button>
                                        <button onClick={(e) => { e.preventDefault(); setEdit(!edit) }}> Cancel </button>
                                    </>

                                }


                                <button onClick={handleDelete} className="bg-red-600 text-white p-1 rounded-lg">Delete</button>




                            </div>}
                            {
                                deleteClicked &&
                                <div className="flex flex-col gap-4">
                                    <p>Are you sure you want to delete this category?</p>
                                    <div className="flex gap-4 w-[40%] mx-auto justify-between">
                                        <button onClick={deleteCategory} className="bg-red-600 text-white p-1 rounded-lg">Yes</button>
                                        <button onClick={(e) => { e.preventDefault(); setDeleteClicked(false) }} className="bg-green-600 text-white p-1 rounded-lg">No</button>
                                    </div>
                                </div>
                            }

                            {mutateCategory.isLoading && <span className="text-yellow-500 text-xs">Updating...</span>}
                            {mutateCategory.isError && <span className="text-red-500 text-xs">Error: {mutateCategory.error.message}</span>}
                            {mutateCategory.isSuccess && <span className="text-green-500 text-xs">Success...</span>}
                        </div>
                    }

                </div>
            </div>




        </>
    )
}

export default UpdateCategory;