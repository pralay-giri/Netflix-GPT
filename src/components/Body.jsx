import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Auth";
import Browser from "./Browser";
import NetflixGpt from "./NetflixGpt";
import Error from "./Error";

const Body = () => {
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
