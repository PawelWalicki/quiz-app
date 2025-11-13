"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavSection from "@/components/nav-section";
import QuizList from "@/components/quiz-list";
import { QuizNotifications } from "@/components/quiz-notifications";
import { Suspense } from "react";

export default function Home() {

  return (
    <div className="bg-gray-200 text-black h-full p-[5vh] flex flex-col h-full items-center">
      <Suspense fallback={<div>Loading</div>}>
        <QuizNotifications/>
      </Suspense>
      <Header />
      <NavSection />
      <QuizList />
      <Footer />
    </div>
  );
}

