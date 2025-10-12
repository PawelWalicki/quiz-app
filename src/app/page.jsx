import Footer from "@/components/footer";
import Header from "@/components/header";
import NavSection from "@/components/nav-section";
import QuizList from "@/components/quiz-list";

export default function Home() {
  return (
    <div className="bg-gray-200 text-black h-full p-[5vh] flex flex-col h-full items-center">
      <Header/>
      <NavSection/>
      <QuizList/>
      <Footer/>
    </div>
  );
}

