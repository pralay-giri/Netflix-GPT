import React, { useEffect } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    const handleSignout = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <header className="w-full flex justify-between absolute px-28 py-1 z-10 top-0 left-0 items-center">
            <div className="">
                <img src={LOGO_IMAGE} alt="logo" className="w-56" />
            </div>
            {user && (
                <div className="flex items-center gap-5">
                    <img
                        src={user.photoURL}
                        alt="profile"
                        className="w-12 object-cover object-center"
                    />
                    <button
                        onClick={handleSignout}
                        className="font-semibold h-fit px-2 py-1 rounded-sm bg-red-600 hover:bg-opacity-85"
                    >
                        sign out
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
