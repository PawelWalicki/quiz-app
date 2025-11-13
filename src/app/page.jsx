"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavSection from "@/components/nav-section";
import QuizList from "@/components/quiz-list";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const serchParams = useSearchParams()
  const isQuizCreated = serchParams.get("created")
  const isQuizEdited = serchParams.get("edited")
  useEffect(() => {
    if (isQuizCreated) {
      toast("Quiz created")
    } if(isQuizEdited) {
      toast("Quiz edited successfully")
    }

  }, [])


  return (
    <div className="bg-gray-200 text-black h-full p-[5vh] flex flex-col h-full items-center">
      <ToastContainer />
      <Header />
      <NavSection />
      <QuizList />
      <Footer />
    </div>
  );
}

