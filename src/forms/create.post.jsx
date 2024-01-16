import TextEditor from "../components/text.editor";
import '../styles/editor.css'
import { useState } from "react";



const CreatePost = () => {

    const getEditorContent = () => {
        const content = localStorage.getItem('content');
        setFormContent({ ...formContent, content: content })
        console.log(content);
        return content;
    }


    const [formContent, setFormContent] = useState({
        title: '',
        desc: '',
        image: '',
        content: ''
    });

    const [formErrors, setFormErrors] = useState({
        title: '',
        desc: '',
        image: '',
        content: '',
    });



    const [preview, setPreview] = useState(false);

    const [previewContent, setPreviewContent] = useState({
        title: '',
        desc: '',
        image: '',
        content: ''
    });


    const handlePreview = (e) => {
        e.preventDefault();
        setPreview(!preview);
        let editorContent = getEditorContent();
        setPreviewContent({ ...previewContent, content: editorContent })
    }

    console.log(preview, 'preview');


    const validateForm = () => {
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;
        let content = getEditorContent();
        console.log(title, desc, content);
        let valid = true;
        if (title === '') {
            setFormErrors({ ...formErrors, title: 'Title is required' })
            valid = false;
        }
        else if (desc === '') {
            setFormErrors({ ...formErrors, desc: 'Description is required' })
            valid = false;

        }

        else if (content === '') {
            setFormErrors({ ...formErrors, content: 'Content is required' })
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

    const handleImageUploadChange = (e) => {
        let file = e.target.files[0];
        // console.log(file, "file");
        setFormContent({ ...formContent, image: file })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = validateForm();
        // if (!valid) alert('Please fill all the fields');
        if (!valid) return;
        let content = getEditorContent();
        let formData = new FormData();
        formData.append('title', formContent.title);
        formData.append('desc', formContent.desc);
        formData.append('image', formContent.image);
        formData.append('content', content);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

    }






    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl p-10"> Write a new post </h1>

            <form className="w-full flex flex-col justify-center items-center">

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



                {/* Main Text Editor */}
                <div className="form-group w-full">
                    <div className={`editor pt-4 w-full max-h-[40%]`}>

                        <TextEditor
                            border={formErrors.content.length > 2 ? 'border-red-500' : ''}
                        />

                    </div>
                    {formErrors.content.length > 2 && <p className="text-red-500 text-sm text-center">{formErrors.content}</p>}
                </div>


                {/*  */} {/*  */}
                {/*  */} {/*  */}

                {/* Buttons */}
                <div className="bottom flex flex-col bg-black w-[100.4%]  lg:w-[100.2%]
                border-collapse border-4 border-black ">

                    {/* Image Upload */}
                    <div className="fileButton  border-y-[1px] border-white  bg-black text-white">
                        <input name='image' id='upload-image-button' type="file"
                            onChange={handleImageUploadChange}
                            className="form-control-file max-w-[440px] cursor-grab px-12 py-3"
                            accept="image/*"
                        />
                    </div>

                    <div className="bottom flex pb-4 bg-black">
                        {/* Submit */}
                        <button onClick={handleSubmit} type="submit" className="w-full p-4 bg-black text-white
                             hover:bg-gray-800 hover:shadow-lg ">
                            Submit
                        </button>

                        {/* Preview */}
                        <button onClick={handlePreview}
                            className="w-full p-4 bg-black text-white
                             hover:bg-gray-800 hover:shadow-lg ">
                            Preview
                        </button>
                    </div>
                </div>
            </form>

            {/* Preview */}
            <div className="preview ">
                {preview &&
                    <div className="preview-content pb-14 min-h-[400px] ">
                        <h1 className="text-4xl text-center"> {formContent.title} </h1>
                        <p className="text-center text-xl"> {formContent.desc} </p>
                        <img src={formContent.image} alt="" className="w-24" />
                        <div className="content" dangerouslySetInnerHTML={{ __html: formContent.content }}></div>
                    </div>}
            </div>

        </div>
    );

}


export default CreatePost;