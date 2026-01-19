import ProtectedRoute from "@/components/ProtectedRoute";

export default function CreateQuizLayout({children}) {
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )
}