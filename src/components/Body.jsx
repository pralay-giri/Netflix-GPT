import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import Browser from "./Browser";
import NetflixGpt from "./NetflixGpt";
import Error from "./Error";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

    const appRouter = createBrowserRouter([
        {
            path: "/",
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Auth />,
                },
                {
                    path: "/browse",
                    element: <Browser />,
                },
                {
                    path: "/gpt",
                    element: <NetflixGpt />,
                },
                {
                    path: "/error",
                    element: <Error />,
                },
            ],
        },
    ]);

    return <RouterProvider router={appRouter} />;
};

export default Body;
