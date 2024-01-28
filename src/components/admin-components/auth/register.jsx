
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import axiosClient from '../../../utils/axiosClient';
import { useAuth } from '../../../utils/authProvider';




const styles = {
    input: "border-2 border-gray-600 text-[#FFFDD0] placeholder:text-gray-600 w-full p-2 px-4 bg-transparent rounded-xl focus:outline-none focus:border-purple-500  ",
    errorBox: "border-2 border-red-500 text-[#FFFDD0] placeholder:text-gray-600 w-full p-2 px-4 bg-transparent rounded-xl focus:outline-none focus:border-purple-500",
    errorText: "text-red-500 text-xs",
    group: "flex flex-col items-center w-full"
}

const RegisterUser = () => {


    const [formContent, setFormContent] = useState({
        name: '',
        role: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        role: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const [user, setUser] = useState({
        id: '',
        name: '',
        role: '',
        email: '',
        token: '',
        status: ''

    });


    const auth = useAuth()

    // const [cookie, setCookie] = useCookies(['user'])

    const validateForm = () => {
        let valid = false;

        if (!formContent.name || formContent.name.length < 3) {
            setFormErrors({ ...formErrors, name: 'Name must be at least 3 characters' })
        }
        else if (!formContent.email || formContent.email.length < 3) {
            setFormErrors({ ...formErrors, email: 'Email must be at least 3 characters' })
        }
        else if (!formContent.password || formContent.password.length < 3) {
            setFormErrors({ ...formErrors, password: 'Password must be at least 3 characters' })
        }
        else if (!formContent.confirmPassword) {
            setFormErrors({ ...formErrors, name: 'Confirm Password' })
        }

        else if (!formContent.role) {
            setFormErrors({ ...formErrors, role: 'Select a role' })
        }
        else if (formContent.password !== formContent.confirmPassword) {
            setFormErrors({ ...formErrors, password: 'Passwords do not match' })
        }

        else {
            setFormErrors({ ...formErrors, email: '', password: '', confirmPassword: '' })
            valid = true;
        }
        return valid
    }

    const handleSelection = (e) => {
        e.preventDefault()
        formErrors[e.target.name] = '';
        const { name, value } = e.target;
        setFormContent({ ...formContent, [name]: value })
    }

    const handleChange = (e) => {
        e.preventDefault()
        formErrors[e.target.name] = '';
        const { name, value } = e.target;
        setFormContent({ ...formContent, [name]: value })
    }

    const userMutation = useMutation(async () => {
        let formData = new FormData();
        formData.append('name', formContent.name);
        formData.append('email', formContent.email);
        formData.append('password', formContent.password);
        return await axiosClient.post('/auth/register', formData)
            .then((res) => { setUser(res.data); auth.login(res.data.user) }).catch((err) => console.log(err))

    });


    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = validateForm();
        if (!valid) return;
        userMutation.mutate();
    }


    useEffect(() => {
        if (!user) return;
        if (!user.id || !user.token) return;

        // window.location.href = `/admin?register=true&&user=${user.id}`

        console.log('user', user);
    }, [user])










    return (
        <div className="page-wrapper min-w-[100vw] min-h-[100vh] mx-auto flex flex-col items-center gap-4 container bg-[#f5f4f4]  text-[#FFFDD0]">
            <h1 className="font-bold md:text-2xl text-center p-4 text-black ">Unnati's Blog</h1>

            <div className="container w-[100vw] h-[80vh] flex flex-col gap-4 justify-center items-center mx-auto " >

                <div className="w-[30%] min-w-[450px] p-10 bg-purple-300
                items-center flex flex-col gap-4 rounded-xl bg-left"
                    style={{ backgroundImage: 'url("/assets/gradients/gradient_login.png")' }}
                >
                    <h1 className=" md:text-xl text-center font-hero leading-5 tracking-widest">Create Your Account</h1>
                    <p className="font-roboto tracking-tight font-sm"> Get Started on a journey of  art and inspiration </p>
                    <form className="w-full flex  gap-2 flex-col items-center">

                        <div className="w-full px-2">
                            <input type="text" placeholder=" Name" name='name' onChange={handleChange}
                                className={`${formErrors.name.length > 1 ? styles.errorBox : styles.input}`} />
                            {formErrors.name.length > 1 && <p className="text-red-500 text-xs">{formErrors.name}</p>}
                        </div>
                        <div className="w-full px-2">
                            <input type="email" placeholder="Email" name='email' onChange={handleChange}
                                className={`${formErrors.email.length > 1 ? styles.errorBox : styles.input}`} />
                            {formErrors.email.length > 1 && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                        </div>
                        <div className="w-full px-2">
                            <input type="password" placeholder="Password" name='password' onChange={handleChange}
                                className={`${formErrors.password.length > 1 ? styles.errorBox : styles.input}`} />
                            {formErrors.password.length > 1 && <p className="text-red-500 text-xs">{formErrors.password}</p>}
                        </div>
                        <div className="w-full px-2">
                            <input type="password" placeholder="Confirm Password" name='confirmPassword' onChange={handleChange}
                                className={`${formErrors.confirmPassword.length > 1 ? styles.errorBox : styles.input}`} />
                            {formErrors.confirmPassword.length > 1 && <p className="text-red-500 text-xs">{formErrors.confirmPassword}</p>}
                        </div>

                        <div className="w-[50%] px-2">
                            <select
                                className={`${formErrors.role.length > 1 ? styles.errorBox : styles.input}`}
                                name='role' onChange={handleSelection}>
                                <option value="user">Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            {formErrors.role.length > 1 && <p className="text-red-500 text-xs">{formErrors.role}</p>}
                        </div>

                        <div className="w-[90%] text-[10px] text-center">
                            <p className="flex gap-[1px] flex-wrap justify-center ">By clicking Continue you accept the Tiptap
                                <a href='/policy/terms-of-service' className="underline underline-offset-1">Terms of Service</a>,
                                <a href='/policy/privacy' className="underline underline-offset-1" >  Privacy Policy </a> and
                                <a href='policy/cookies' className="underline underline-offset-1">Cookie Policy </a>.
                            </p>

                        </div>


                        <button type="submit" onClick={handleSubmit} className="w-full mt-4 p-2">Start Now </button>

                    </form>


                </div>
                <p className="text-sm font-bold text-gray-600 ">
                    Already have an account? <a href="/admin/auth/login" className="underline">Log in</a>
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

export default RegisterUser;


