import { useContext, createContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import Constants from "expo-constants";

// Tạo context
const MyCoursesContext = createContext();

const MyCoursesProvider = ({ children }) => {
    const [myCourses, setMyCourses] = useState([]); // State lưu trữ danh sách khóa học
    const { id } = useAuthContext(); // Lấy ID người dùng từ AuthContext

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const response = await fetch(
                    `${Constants.expoConfig.extra.API_PREFIX}/accountCourses/getList/${id}`
                );
                if (!response.ok) {
                    throw new Error("Get data failed GET MY COURSES");
                }
                const data = await response.json();
                setMyCourses(data); // Lưu dữ liệu vào state
            } catch (error) {
                console.log("Error fetching courses:", error);
            }
        };

        if (id) {
            fetchMyCourses(); // Gọi API khi có ID
        }
    }, [id]);

    return (
        <MyCoursesContext.Provider value={{ myCourses, setMyCourses }}>
            {children}
        </MyCoursesContext.Provider>
    );
};

// Hook tiện ích để sử dụng context
const useMyCourses = () => useContext(MyCoursesContext);

export { MyCoursesProvider, useMyCourses };
