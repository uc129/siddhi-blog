import { useEffect, useState } from "react";
import { useMutation } from 'react-query'
import axiosClient from "../../../utils/axiosClient";



// http://localhost:4000/api/v1
// /blog/tags/update:id


const UpdateTag = ({ currentTag, getCurrent }) => {
    const [edit, setEdit] = useState(false)
    const [current, setCurrent] = useState(currentTag)
    const [formData, setFormData] = useState({
        _id: currentTag._id,
        name: currentTag.name,
        description: currentTag.description,
        status: currentTag.status
    })

    const [updated, setUpdated] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);



    useEffect(() => {
        setCurrent(currentTag)
    }, [currentTag])

    // console.log('current', current);




    const mutateTag = useMutation(async () => {
        let form = new FormData();
        form.append('name', formData.name)
        form.append('description', formData.description)
        form.append('status', formData.status)
        // console.log('form data', formData);
        await axiosClient.post(`/blog/tags/update/${formData._id}`, formData).then(() => setUpdated(true)).catch(err => console.log(err))
    });

    useEffect(() => {
        if (updated && mutateTag.isSuccess) window.location.href = `/admin?tag=${current.name}`
    }, [mutateTag.isSuccess, current.name, updated])



    const handleUpdate = (e) => {
        e.preventDefault()
        getCurrent(current)
        setEdit(!edit)
        mutateTag.mutate(formData)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        setDeleteClicked(true);
    }

    const deleteTag = async () => {
        await axiosClient.delete(`/blog/tags/delete/${current._id}`)
            .then(() => window.location.href = '/admin').catch(err => console.log(err))
    }












    return (
        <>
            <div id='tag-detail' className="recent  max-h-[40%] min-h-[500px] hidden xl:block  overflow-scroll  mx-auto ">

                <h3 className="text-center  underline underline-offset-2">Tag Detail</h3>
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

                            {deleteClicked &&
                                <div className="flex flex-col gap-2">
                                    <p className="text-center">Are you sure you want to delete this tag?</p>
                                    <div className="flex justify-center gap-2">
                                        <button onClick={deleteTag} className="bg-red-600 text-white p-1 rounded-lg">Yes</button>
                                        <button onClick={(e) => { e.preventDefault(); setDeleteClicked(false) }} className="bg-green-600 text-white p-1 rounded-lg">No</button>
                                    </div>
                                </div>
                            }





                            {mutateTag.isLoading && <span className="text-yellow-500 text-xs">Updating...</span>}
                            {mutateTag.isError && <span className="text-red-500 text-xs">Error: {mutateTag.error.message}</span>}
                            {mutateTag.isSuccess && <span className="text-green-500 text-xs">Success...</span>}
                        </div>
                    }

                </div>
            </div>




        </>
    )
}

export default UpdateTag;