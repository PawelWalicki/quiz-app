import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export const QuizNotifications = () => {
    const serchParams = useSearchParams()
    const isQuizCreated = serchParams.get("created")
    const isQuizEdited = serchParams.get("edited") // "false" false

    useEffect(() => {
        if (isQuizCreated) {
            toast("Quiz created")
        } if (isQuizEdited) {
            toast("Quiz edited successfully")
        }

    }, [])
    return <ToastContainer />
}

