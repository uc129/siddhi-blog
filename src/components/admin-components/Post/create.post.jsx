
import '../../../styles/editor.css'
import { useEffect, useState } from "react";
import Editor from '../../TipTapEditor'
import { useQuery } from 'react-query';
import axiosClient from '../../../utils/axiosClient';
import { useMutation } from 'react-query';




// const PostSchema = new Schema({

//     title: { type: String, required: true, trim: true, index: true, min: 3, match: /[a-zA-Z0-9]/ },
//     content: { type: String, required: true, trim: true, min: 3 },

//     author: {
//         type: Schema.Types.ObjectId, ref: 'User', required: true,
//         validate: {
//             validator: async function (value) {
//                 return await User.exists({ _id: value });  // return await User.exists({ _id: value, role: 'artist' });  
//             }, message: 'Invalid User'
//         }
//     },

//     images: [
//         {
//             type: Schema.Types.ObjectId, ref: 'Image', validate: {
//                 validator: async function (value) {
//                     return await Image.findById(value) != null;
//                 }, message: 'Invalid Image'
//             }
//         }
//     ],

//     comments: [
//         {
//             type: Schema.Types.ObjectId, ref: 'Comment',
//             validate: {
//                 validator: async function (value) {
//                     return await Comment.findById(value) != null;
//                 }, message: 'Invalid Comment'
//             }
//         }
//     ],



//     slug: { type: String, required: true, trim: true, unique: true, index: true, min: 3, },

//     category: {
//         type: Schema.Types.ObjectId, ref: 'Category', required: true,
//         validate: {
//             validator: async function (value) {
//                 return await Category.findById(value) != null;
//             }, message: 'Invalid Category'
//         }
//     },

//     tags: [{
//         type: Schema.Types.ObjectId, ref: 'Tag',
//         validate: {
//             validator: async function (value) {
//                 return await Tag.findById(value) != null;
//             }, message: 'Invalid Tag'
//         }
//     }],



//     meta: {
//         likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//         dislikes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//         views: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//         bookmarks: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//         shares: {
//             by: { type: Schema.Types.ObjectId, ref: 'User' },
//             to: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//         },
//         reports: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//     },
//     status: { type: String, enum: ['draft', 'published'], default: 'draft' },

//     dates: {
//         initiated: { type: Date, default: Date.now },
//         published: { type: Date },
//         updated: { type: Date },
//     },






// }, { timestamps: true });

// ----------------------------------



// const ImageSchema = new Schema({

//     title: { type: String, required: true, trim: true, index: true, min: 3, match: /[a-zA-Z0-9]/ },
//     description: { type: String, required: true, trim: true, min: 3 },

//     category: {
//         type: String,
//         enum: ['avatar', 'post', 'other'], default: 'other',
//         required: true, trim: true, min: 3
//     },

//     url: {
//         type: String, required: true, trim: true, min: 3,
//         validate: {
//             validator: value => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(value),
//             message: 'Invalid URL'
//         }
//     },

//     artist: {
//         type: Schema.Types.ObjectId, ref: 'User',
//         validate: {
//             validator: async function (value) {
//                 return await User.exists({ _id: value });  // return await User.exists({ _id: value, role: 'artist' });  
//             }, message: 'Invalid User'
//         }
//     },
//     primary: { type: Boolean, default: false },
//     status: { type: String, enum: ['active', 'inactive'], default: 'active' },
//     slug: { type: String, required: true, trim: true, unique: true, index: true, min: 3, },

//     meta: {
//         numLikes: { type: Number, default: 0 },
//         numDislikes: { type: Number, default: 0 },
//         numViews: { type: Number, default: 0 },
//         numBookmarks: { type: Number, default: 0 },
//         numShares: { type: Number, default: 0 },
//         numReports: { type: Number, default: 0 },
//     },

// }, { timestamps: true });


const CreatePost = () => {

    const [allCategories, setAllCategories] = useState(null);
    const [allTags, setAllTags] = useState(null);

    const [editorContent, setEditorContent] = useState('');
    const [preview, setPreview] = useState(false);
    const [uploadImageClick, setUploadImageClick] = useState(false);
    const [imageDetails, setImageDetails] = useState({
        _id: '',
        title: '',
        description: '',
        primary: 'false',
        status: 'active',
        category: 'post',
        image: null,
        url: '',
        slug: ''
    })

    const [images, setImages] = useState([])




    const { isLoadingCategories, isErrorFetchingCategories, categoriesError } = useQuery('categories', fetchCategories)
    const { isLoadingTags, isErrorFetchingTags, tagsError } = useQuery('tags', fetchTags)



    //mutations
    const imageMutation = useMutation(async () => {
        // console.log('image details', imageDetails);
        const formData = new FormData();
        formData.append('title', imageDetails.title);
        formData.append('description', imageDetails.description);
        formData.append('primary', imageDetails.primary);
        formData.append('status', imageDetails.status);
        formData.append('category', imageDetails.category);
        formData.append('image', imageDetails.image);
        await axiosClient.post('/blog/images/upload', imageDetails).then((res) => {
            // console.log('res', res);
            setImages([...images, res.data])
            // console.log('image', res.data);
        }).catch((err) => {
            console.log('err', err);
        })
    })


    const postMutation = useMutation(async () => {
        // console.log('form content from post-mutation', formContent);
        let formData = new FormData();
        formData.append('title', formContent.title);
        formData.append('desc', formContent.desc);
        formData.append('content', localStorage.getItem('editor-content'));
        formData.append('category', formContent.category);
        formData.append('tags', formContent.tags);
        formData.append('status', formContent.status);

        images && images.map((image) => formData.append('images', image._id));

        await axiosClient.post('/blog/posts/create', formData).then((res) => {
            // console.log('res', res);
            localStorage.removeItem('editor-content');
            window.location.reload();
        }).catch((err) => {
            console.log('err', err);

        })
    })

    // const { isLoadingImage, isErrorImage, imageError } = useQuery('image', fetchImage)

    // allCategories && console.log('category', allCategories[0]);
    // allTags && console.log('tags', allTags[0]);


    //get categories from db
    async function fetchCategories() {
        const { data } = await axiosClient.get('/blog/categories/all')
        if (!data) return;
        setAllCategories(data)
        return data
    }

    async function fetchTags() {
        const { data } = await axiosClient.get('/blog/tags/all')
        if (!data) return;
        setAllTags(data)
        return data
    }

    const [formContent, setFormContent] = useState({
        title: '',
        desc: '',
        content: '',
        category: '',
        tags: '',
        images: []

    });

    const [formErrors, setFormErrors] = useState({
        title: '',
        desc: '',
        content: '',
        category: '',
        tags: '',
        status: '',

    });

    const [previewContent, setPreviewContent] = useState({
        title: '',
        desc: '',
        content: '',
        category: '',
        tags: '',
        status: '',
        images: []


    });

    const getEditorContent = () => {
        let content = localStorage.getItem('editor-content')
        setEditorContent(content)
        setFormContent({ ...formContent, content })
        // console.log('content from editor', content);
        // console.log('formContent', formContent);
        // console.log('previewContent state', previewContent);
        // console.log('editorContent state', editorContent);
        return content;
    }

    const handlePreview = (e) => {
        e.preventDefault();
        setPreview(!preview);
        let editorContent = getEditorContent();
        setPreviewContent({ ...previewContent, content: editorContent })
    }

    const validateForm = () => {
        // let title = document.getElementById('title').value;
        // let desc = document.getElementById('desc').value;

        let content = getEditorContent();
        // console.log(title, desc, content);
        let valid = true;
        if (formContent.title === '') {
            setFormErrors({ ...formErrors, title: 'Title is required' })
            valid = false;
        }
        else if (formContent.desc === '') {
            setFormErrors({ ...formErrors, desc: 'Description is required' })
            valid = false;
        }
        else if (content === '<p>Start a new post.!!!...</p>') {
            setFormErrors({ ...formErrors, content: 'Content is required' })
            valid = false;
        }
        else if (formContent.category === '') {
            setFormErrors({ ...formErrors, category: 'Category is required' })
            valid = false;
        }
        else if (formContent.tags === '') {
            setFormErrors({ ...formErrors, tags: 'Tags is required' })
            valid = false;
        }
        else if (formContent.status === ' ') {
            setFormErrors({ ...formErrors, status: 'Status is required' })
            valid = false;
        }
        else {
            setFormErrors({ ...formErrors, title: '', desc: '', content: '' })
            valid = true;
        }
        return valid
    }

    const handleChange = (e) => {
        e.preventDefault()
        formErrors[e.target.name] = '';
        const { name, value } = e.target;
        // console.log(name, value);
        setFormContent({ ...formContent, [name]: value })
        setPreviewContent({ ...previewContent, [name]: value })
    }

    const handleSelection = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        console.log(name, value);
        if (value === '') return
        // console.log(name, value);
        setFormContent({ ...formContent, [name]: value })
        setFormErrors({ ...formErrors, [name]: '' })
        setPreviewContent({ ...previewContent, [name]: value })
    }


    const handleImageDetailChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'primary') {
            value = e.target.checked;
        }
        // console.log(name, value);
        setImageDetails({ ...imageDetails, [name]: value })
    }

    const handleImageUploadChange = (e) => {
        let file = e.target.files[0];
        // let image = {
        //     title: imageDetails.title,
        //     description: imageDetails.description,
        //     primary: imageDetails.primary,
        //     status: imageDetails.status,
        //     category: imageDetails.category,
        //     image: file
        // }
        file && setImageDetails({ ...imageDetails, image: file })
        // console.log('file', file);
    }








    useEffect(() => {
        if (imageMutation.isSuccess) {
            console.log('image uploaded');
            setUploadImageClick(false)
        }
    }, [imageMutation.isSuccess])





    const handleSubmit = async (e) => {
        e.preventDefault();

        getEditorContent();
        setFormContent({ ...formContent, content: localStorage.getItem('editor-content') })
        // console.log(localStorage.getItem('editor-content'), 'editorContent');
        setFormContent({ ...formContent, image: images })

        let valid = validateForm();

        if (!valid) {
            console.log('form not valid');
            return;
        }
        console.log('form content from submit', formContent);
        postMutation.mutate();

    }







    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl p-10"> Write a new post </h1>

            <form className="w-full flex flex-col  gap-2 justify-center items-center">

                {/* Title */}
                <div className="form-group title w-full">
                    <input id='title' name='title' type='text' placeholder='Enter Title'
                        onChange={handleChange}
                        className={`w-full outline-none border-b-[1px] rounded-lg  border-black px-8 
                    py-4 min-h-[10px] text-sm 
                    ${formErrors.title.length > 2 ? `border-red-500 ` : 'border-black'}`}
                    />
                    {formErrors.title.length > 2 && <p className="text-red-500 text-sm text-center">{formErrors.title}</p>}
                </div>



                {/* Description */}
                <div className="form-group desc w-full">
                    <input id='desc' name='desc' type='text' placeholder='Enter Description'
                        onChange={handleChange}
                        className={`w-full outline-none border-b-[1px]
                     border-black rounded-lg  px-8 py-4 min-h-[10px] text-sm
                     ${formErrors.desc.length > 2 ? `border-red-500 ` : 'border-black'}`} />
                    {formErrors.desc.length > 2 && <p className="text-red-500 text-sm text-center">{formErrors.desc}</p>}
                </div>

                <div className="select flex">


                    <div>
                        <>
                            {isLoadingCategories && <p className="text-red-500 text-sm text-center">Loading Categories...</p>}
                            {isErrorFetchingCategories && <p className="text-red-500 text-sm text-center">{categoriesError}</p>}
                            {/* {categoriesError && <p className="text-red-500 text-sm text-center">No Categories Found</p>} */}
                        </>

                        {allCategories && <div className="category">
                            <select name="category" id="category" onChange={handleSelection}
                                className='p-2 hover:underline '>
                                <option value="">Category</option>
                                {
                                    allCategories.map((category, index) => (
                                        <option key={index} value={category._id}>{category.name}</option>))
                                }
                            </select>
                            {formErrors.category.length > 2 && <p className="text-red-500 text-sm text-center">{formErrors.category}</p>}

                        </div>}
                    </div>



                    <div>
                        {isLoadingTags && <p className="text-red-500 text-sm text-center">Loading Tags...</p>}
                        {isErrorFetchingTags && <p className="text-red-500 text-sm text-center">{tagsError}</p>}
                        {allTags && <div className="tags">
                            <select name="tags" id="tags" onChange={handleSelection}
                                className='p-2 hover:underline '>
                                <option value="">Tags</option>
                                {
                                    allTags.map((tag, index) => (
                                        <option key={index} value={tag._id}>{tag.name}</option>))
                                }
                            </select>
                        </div>}

                    </div>

                    <div className="status">
                        <select defaultValue={'published'} name="status" id="status" onChange={handleSelection}
                            className='p-2 hover:underline '>
                            <option value=" ">Select Status</option>
                            <option value="draft">Draft</option>
                            <option value="published">Publish</option>
                        </select>
                    </div>




                </div>



                {/* Main Text Editor */}

                <div className={`editor mt-4 pt-4  mx-auto max-h-[40%] border-2 border-black`}>
                    <Editor />
                </div>
                {formErrors.content.length > 2 && <p className="text-red-500 text-sm text-center">{formErrors.content}</p>}

                {/*  */} {/*  */}
                {/*  */} {/*  */}

                {/* Buttons */}
                <div className="bottom flex flex-col bg-black w-[100%]  
                border-collapse border-4 border-black ">

                    {/* Image Upload */}
                    {!uploadImageClick &&
                        <div className="fileButton  border-b-[1px] border-white  bg-black text-white w-full">
                            <button className=' p-4 w-full' name='upload-image-button' onClick={() => setUploadImageClick(true)}>
                                Upload Image
                            </button>
                        </div>
                    }

                    {
                        uploadImageClick &&
                        <div className="fileButton flex   flex-wrap
                         border-b-[1px] border-white  bg-black text-white
                         gap-4 p-4"
                        >
                            <div className='flex flex-col w-[60%] mx-auto items-stretch justify-around gap-2' >
                                <input className='p-2 px-4 outline-none bg-gray-100 rounded-lg text-black' type="text"
                                    name="title" id="title" placeholder='Image Title'
                                    onChange={handleImageDetailChange}
                                />

                                <input className='p-2 px-4 outline-none bg-gray-100 rounded-lg text-black' type="text"
                                    name="description" id="description" placeholder='Image Description'
                                    onChange={handleImageDetailChange}
                                />
                            </div>

                            <div className='flex w-full gap-4 justify-center' >

                                {/* <select name="primary" id="image-primary"
                                    onChange={handleImageDetailChange}
                                >
                                    <option value=""> Select Primary  </option>
                                    <option value="true">Primary</option>
                                    <option value="false">Secondary</option>
                                </select> */}

                                <div>
                                    <label htmlFor="primary">Primary Image? </label>
                                    <input type="checkbox" name="primary" id="primary"
                                        onChange={handleImageDetailChange}
                                    />
                                </div>

                                <select name="status" id="image-status"
                                    onChange={handleImageDetailChange}
                                >
                                    <option value=""> Select Status  </option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>

                                <select name="category" id="image-category"
                                    onChange={handleImageDetailChange}
                                >
                                    <option value=""> Select Category  </option>
                                    <option value="avatar">Avatar</option>
                                    <option value="post">Post</option>
                                    <option value="other">Other</option>
                                </select>

                            </div>

                            <div className='flex items-center w-full'>


                            </div>
                            <div className='flex w-full justify-center gap-12'>
                                <input name='image' id='upload-image-button' type="file"
                                    onChange={handleImageUploadChange}
                                    className="form-control-file max-w-[440px] cursor-grab px-12 py-3"
                                    accept="image/*"
                                />

                                {imageDetails.image &&
                                    imageDetails.title &&
                                    imageDetails.description &&
                                    <button onClick={(e) => { e.preventDefault(); imageMutation.mutate() }}>
                                        Upload
                                    </button>
                                }

                                <button onClick={() => setUploadImageClick(false)}>
                                    Cancel
                                </button>

                            </div>


                        </div>
                    }

                    {!uploadImageClick &&
                        <div className="bottom flex mb-4 bg-black mt-4">
                            {/* Submit */}
                            <button onClick={handleSubmit} type="submit" className="w-full p-4 bg-black text-white
                           hover:shadow-lg hover:bg-yellow-200  hover:text-black ">
                                Submit
                            </button>

                            {/* Preview */}
                            <button onClick={handlePreview}
                                className="w-full p-4 bg-black text-white
                             hover:shadow-lg hover:bg-yellow-200  hover:text-black ">
                                <span>{preview ? 'Close Preview' : 'Preview'} </span>
                            </button>
                        </div>
                    }

                    {postMutation.isSuccess && <p className="text-green-500 text-sm text-center">Post Created Successfully</p>}
                    {postMutation.isError && <p className="text-red-500 text-sm text-center">Post Creation Failed</p>}
                    {postMutation.isLoading && <p className="text-yellow-500 text-sm text-center">Creating Post...</p>}
                </div>
            </form>

            {/* Preview  Block*/}
            <div className="preview ">
                {preview &&
                    <div className="preview-content pb-14 min-h-[400px] text-black">
                        <h1 className="text-4xl text-center"> {formContent.title} </h1>
                        <p className="text-center text-xl"> {formContent.desc} </p>
                        <img src={formContent.image} alt="" className="w-24" />

                        <div className="preview-content-main mt-4">
                            <div dangerouslySetInnerHTML={{ __html: editorContent }}></div>
                        </div>
                    </div>}
            </div>

        </div>
    );

}


export default CreatePost;