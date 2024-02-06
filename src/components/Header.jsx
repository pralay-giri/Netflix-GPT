import React, { useEffect } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toogleGptPage } from "../store/gptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const toogleGptPageView = useSelector(
        (state) => state.gptSlice.toogleGptPageView
    );

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const handleSignout = async () => {
        try {
            await signOut(auth);
            dispatch(removeUser());
        } catch (error) {}
    };

    const handleGptBtnClick = () => {
        dispatch(toogleGptPage());
    };

    return (
        <header className="w-screen flex justify-between fixed top-0 z-20 px-12 bg-gradient-to-b  from-black">
            <div className="">
                <img src={LOGO_IMAGE} alt="logo" className="w-56" />
            </div>
            {user && (
                <div className="flex items-center gap-5">
                    <button
                        onClick={handleGptBtnClick}
                        className="font-semibold h-fit px-2 py-1 rounded-sm bg-gray-700  text-white hover:bg-opacity-85 hover:text-gray-300"
                    >
                        {toogleGptPageView ? "Home" : "GPT search"}
                    </button>
                    <button
                        onClick={handleSignout}
                        className="font-semibold h-fit px-2 py-1 rounded-sm bg-red-600 text-white hover:bg-opacity-85 hover:text-gray-300"
                    >
                        sign out
                    </button>
                    <div className="flex flex-col justify-center items-center cursor-pointer">
                        <img
                            src={user.photoURL}
                            alt="profile"
                            className="w-9 rounded-sm object-cover object-center"
                        />
                        <p className="text-white text-sm w-14 whitespace-nowrap overflow-hidden text-ellipsis">
                            {user.displayName}
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
