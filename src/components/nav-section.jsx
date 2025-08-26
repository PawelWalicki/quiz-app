import CreateButton from "./create-button";
import Search from "./search";

export default function NavSection() {
    return (
        <div className="w-full pt-[5vh] flex justify-around" >
            <Search />
            <CreateButton />
        </div>
    )
}