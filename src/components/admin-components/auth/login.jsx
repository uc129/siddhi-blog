
import React, { useEffect, useState } from 'react';

import { useAuth } from '../../../utils/authProvider';
import axiosClient from '../../../utils/axiosClient';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Elephant from '../../elephant';
import axios from 'axios';

const styles = {
    input: "border-2 border-gray-600 text-[#FFFDD0] placeholder:text-gray-600 w-full p-2 px-4 bg-transparent rounded-xl focus:outline-none focus:border-purple-500  ",
    group: "flex flex-col items-center w-full",
    errorText: 'text-red-500 text-sm text-center',
    errorBox: 'border-2 border-red-500 placeholder:text-gray-600 w-full p-2 px-4 bg-transparent rounded-xl focus:outline-none focus:border-purple-500',
    submitButton: 'w-full mt-4 p-2 bg-purple-500 rounded-xl text-[#FFFDD0] font-bold',
}

const LoginUser = () => {


    const [formContent, setFormContent] = useState({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
    const [remember, setRemember] = useState(false);

    const navigate = useNavigate()
    const auth = useAuth();

    const { isAuthenticated } = useAuth()
    const cancelTokenSource = axios.CancelToken.source();
    const loginMutation = useMutation((formContent) => axiosClient.post('/auth/login', formContent, { cancelToken: cancelTokenSource.token }).catch((e) => {
        if (axios.isCancel(e)) cancelTokenSource.cancel('login interrupted');
    }), {
        onSuccess: (data) => {
            if (!data) return null
            auth.login({ user: data.data.user })
        },
        onError: (error) => {
            console.log(error)
        }
    })


    useEffect(() => {
        if (isAuthenticated) {
            navigate(`/admin?user=${auth.user.id}`, { replace: true })
        }
    }, [isAuthenticated, auth.user, navigate])


    const handleCheckBox = (e) => {
        setRemember(e.target.checked)
    }

    const validateForm = () => {
        let valid = false;
        if (!formContent.email || formContent.email.length < 3) {
            setFormErrors({
                ...formErrors, email: 'Enter a valid email'
            })
        }
        else if (!formContent.password || formContent.password.length < 3) {
            setFormErrors({ ...formErrors, password: 'Password must be at least 3 characters' })
        }
        else {
            setFormErrors({ ...formErrors, email: '', password: '' })
            valid = true;
        }
        return valid
    }

    const handleChange = (e) => {
        e.preventDefault()
        formErrors[e.target.name] = '';
        const { name, value } = e.target;
        setFormContent({ ...formContent, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = validateForm();
        if (!valid) return;
        if (remember) localStorage.setItem('userDetails', JSON.stringify(formContent));

        let form = new FormData();
        form.append('email', formContent.email);
        form.append('password', formContent.password);
        loginMutation.mutate(form)
    }






    // remember details from local storage
    // useEffect(() => {
    //     let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    //     if (!userDetails) return;
    //     let email = document.querySelector('input[name="email"]');
    //     let password = document.querySelector('input[name="password"]');
    //     email.value = String(userDetails.email);
    //     password.value = String(userDetails.password);
    // }, [])



    return (
        <div className="page-wrapper min-w-[100vw] min-h-[100vh] mx-auto flex flex-col items-center gap-4 container bg-[#f5f4f4]  text-[#FFFDD0]">
            <h1 className="font-bold md:text-2xl text-center p-4 text-black ">Unnati's Blog</h1>

            <div className="container w-[100vw] h-[80vh] flex flex-col gap-4 justify-center items-center mx-auto " >


                {/*  */}
                <div className='inline   w-40'> {loginMutation.isLoading && <Elephant scale={'1'} />} </div>

                <div className="w-[30%] min-w-[450px] p-10 bg-purple-300
                items-center flex flex-col gap-4 rounded-xl bg-left"
                    style={{ backgroundImage: 'url("/assets/gradients/gradient_login.png")' }}
                >
                    <h1 className=" md:text-xl text-center font-hero leading-5 tracking-widest">Login</h1>
                    <p className="font-roboto tracking-tight font-sm"> Ready for inspiration? </p>
                    <form className="w-full flex  gap-2 flex-col items-center">


                        <div className={`w-full px-2 `}>
                            <input type="email" placeholder="Email" name="email" onChange={handleChange}
                                className={` ${formErrors.email.length > 1 ? styles.errorBox : styles.input}`} />
                            {formErrors.email.length > 1 && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                        </div>
                        <div className="w-full px-2">
                            <input type="password" placeholder="Password" name="password" onChange={handleChange}
                                className={` ${formErrors.password.length > 1 ? styles.errorBox : styles.input}`} />
                            {formErrors.password.length > 1 && <p className="text-red-500 text-xs">{formErrors.password}</p>}
                        </div>

                        <div className="flex w-full justify-between text-sm">

                            <div className='set-cookies flex gap-2'>
                                <input onChange={handleCheckBox} type="checkbox" id="remember" name="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>

                            <a href="/admin/auth/forgot-password">
                                <p className="underline underline-offset-1">Forgot Password?</p>
                            </a>
                        </div>

                        <button type="submit" onClick={handleSubmit} className="w-full mt-4 p-2 inline">
                            Sign In
                        </button>
                    </form>
                </div>

                <p className="text-sm font-bold text-gray-600 ">
                    No account yet? <a href="/register" className="underline">Sign Up</a>
                </p>
            </div >

            <ul className="flex gap-8 text-gray-600 list-disc underline underline-offset-2 ">
                <li><a href="/legal-notice"> Legal Notice </a></li>
                <li><a href="/privacy-policy"> Privacy Policy </a></li>
                <li> <a href="/cookie-policy"> Cookie Policy </a></li>
                <li><a href="/terms-of-service"> Terms of Service </a></li>
            </ul>

        </div >
    );
}

export default LoginUser;



// const UserSchema = new Schema({
//     name: { type: String, required: true, trim: true, index: true, min: 3, match: /[a-zA-Z0-9]/ },
//     email: { type: String, required: true, trim: true, index: true, min: 3, match: /^\S+@\S+\.\S+$/ },
//     password: { type: String, required: true, trim: true, min: 3 },
//     role: { type: String, enum: ['user', 'admin'], default: 'user' },
//     status: { type: String, enum: ['online', 'offline', 'inactive'], default: 'offline' },

//     meta: {
//         likes: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//         dislikes: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//         views: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//         bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//         shares: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//         reports: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//     },

//     tags: [{
//         type: Schema.Types.ObjectId, ref: 'Tag',
//         validate: {
//             validator: async function (value) {
//                 return await Tag.findById(value) != null;
//             }, message: 'Invalid Tag'
//         }
//     }],


// }, { timestamps: true });