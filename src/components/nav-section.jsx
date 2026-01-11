import CreateButton from "./create-button";
import Search from "./search";
import { useAuth } from "@/context/AuthContext";
export default function NavSection() {
    const {user} = useAuth()
    return (
        <div className="md:w-full pt-[5vh] flex flex-col md:flex-row justify-around " >
             <Search /> 
           {user ? <CreateButton />: null}
        </div>
    )
}