import React, { useState } from "react";
import {
    BACKGROUND_IMGAE,
    DEFAULT_PROFILE,
    LOGO_IMAGE,
} from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import { validateData } from "../utils/validate";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { auth } from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import Header from "./Header";

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupVisible, setSignupVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [passwordFiledVisible, setPasswordFiledVisible] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const toggleAuth = () => {
        setSignupVisible((prev) => !prev);
    };

    const handlePasswordField = () => {
        setPasswordFiledVisible((prev) => !prev);
    };

    const handleFromSubmit = async (e) => {
        e.preventDefault();

        if (signupVisible) {
            const isValidName = /^([a-zA-Z]+)\s([a-zA-Z]+){2,30}$/.test(name);
            if (!isValidName) {
                setErrorMessage(
                    "full name field can be contain 2 - 30 charater and one space"
                );
                return;
            }
        }
        const data = validateData(email, password);
        if (data) {
            setErrorMessage(data);
            return;
        }

        if (signupVisible) {
            // sign up process
            try {
                setErrorMessage(null);
                const responce = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: DEFAULT_PROFILE,
                });

                const { displayName, uid, photoURL } = auth.currentUser;
                dispatch(
                    addUser({
                        displayName,
                        email: auth.currentUser.email,
                        uid,
                        photoURL,
                    })
                );
            } catch (error) {
                setErrorMessage(error.message);
                navigate("/error");
            }
        } else {
            // sign in process
            try {
                setErrorMessage(null);
                const responce = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
            } catch (error) {
                setErrorMessage(error.message);
                navigate("/error");
            }
        }
    };

    return (
        <div className="text-white">
            <Header />
            <div className="absolute">
                <div className="absolute inset-0 bg-black bg-opacity-65"></div>
                <img src={BACKGROUND_IMGAE} alt="background" />
            </div>

            <form className="absolute w-3/12 right-0 left-0 mx-auto mt-40 px-10 py-5 *:mb-4 *:w-full *:px-3 *:py-2 bg-black bg-opacity-50 *:rounded-sm  rounded-sm">
                <h1 className="text-3xl font-semibold">
                    {signupVisible ? "Sign up" : "Sign in"}
                </h1>
                {signupVisible && (
                    <input
                        type="text"
                        placeholder="full name"
                        value={name}
                        onChange={handleName}
                        className="bg-gray-800 border border-gray-600"
                    />
                )}
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    className="bg-gray-800 border border-gray-600"
                />
                <div className="py-2 px-3 flex items-center justify-between bg-gray-800 border border-gray-600 focus-within:outline focus-within:outline-1">
                    <input
                        type={passwordFiledVisible ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        className="bg-transparent border-none outline-none w-full"
                    />
                    {passwordFiledVisible ? (
                        <FaRegEye
                            className="text-xl cursor-pointer"
                            onClick={handlePasswordField}
                        />
                    ) : (
                        <FaRegEyeSlash
                            className="text-xl cursor-pointer"
                            onClick={handlePasswordField}
                        />
                    )}
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button
                    className="bg-red-700 font-semibold hover:bg-opacity-90"
                    onClick={handleFromSubmit}
                >
                    {signupVisible ? "Sign up" : "Sign in"}
                </button>
                <p>
                    {signupVisible ? "already registered " : "New to Netflix? "}
                    <span
                        className="underline cursor-pointer"
                        onClick={toggleAuth}
                    >
                        {signupVisible ? "Sign in" : "Sign up"}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Auth;
