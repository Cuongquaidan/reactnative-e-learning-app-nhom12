import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import Constants from "expo-constants";
const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
    const { id } = useAuthContext();
    const [savedCourses, setSavedCourses] = useState([]);

    useEffect(() => {
        if (!id) return;

        const getSavedCourses = async () => {
            const res = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courseSaveds/${id}`
            );
            if (!res) throw new Error("Get data failed");

            const data = await res.json();
            setSavedCourses(data);
        };
        getSavedCourses();
    }, [id]);

    return (
        <SavedContext.Provider value={{ setSavedCourses, savedCourses }}>
            {children}
        </SavedContext.Provider>
    );
};

export const useSavedCoursesContext = () => useContext(SavedContext);
