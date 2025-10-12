import CreateButton from "./create-button";
import Search from "./search";

export default function NavSection() {
    return (
        <div className="md:w-full pt-[5vh] flex flex-col md:flex-row justify-around " >
            <Search />
            <CreateButton />
        </div>
    )
}