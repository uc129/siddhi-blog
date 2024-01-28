

import { useAuth } from "../../../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axiosClient from "../../../utils/axiosClient";

const Logout = () => {

    const auth = useAuth();
    const navigate = useNavigate()



    const logoutMutation = useMutation(() => logout(), {
        onSuccess: () => {
            auth.logout()
            navigate('/')
        }
    });

    const logout = async () => {
        return await axiosClient.post('/auth/logout')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }




    return (
        <div className="w-full h-full flex justify-center items-center">
            <span className="cursor-pointer nav-link text-xs " onClick={(e) => { e.preventDefault(); logoutMutation.mutate() }}> Logout </span>
        </div>
    )
}

export default Logout

