"use client";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { competitorSlice } from "./store/storeReducers/Competitor";

export default function Home() {
  const dispatch = useDispatch();

  const competitors = useSelector((state) => state.competitors.competitors);

  const { addCompetitor } = competitorSlice.actions;

  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [competitorTitle, setCompetitorTitle] = useState("");
  const [competitorScore, setCompetitorScore] = useState("");

  const modalFormOpen = () => {
    setIsModalFormOpen(true);
  };

  const modalFormClose = () => {
    setIsModalFormOpen(false);
  };

  return (
    <main className="relative w-full h-full">
      <h2 className="mt-[50px] pb-[30px] w-full text-[#ffffff] text-[2rem] font-['DaMiOne'] text-center">
        Результаты таски &quot;Умный дом&quot;
      </h2>

      {isModalFormOpen && (
        <div className="absolute w-full h-full bg-[rgba(0, 0, 0, 0.6)]">
          <div
            className={`absolute mt-[calc(50%-640px)] ml-[calc(50%-210px)] mx-auto py-[40px] px-[30px] w-[420px] ${
              isPasswordValid ? "h-[480px]" : "h-[380px]"
            } bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border-[2px] border-[#bf5af2] rounded-[20px] z-[30]`}
          >
            <button
              onClick={() => modalFormClose()}
              className="absolute top-[30px] right-[20px] rotate-[45deg] cursor-pointer outline-none"
            >
              <img
                src="/static/ItemAddingIcon.svg"
                alt="Кнопка: закрытие формы создания участника"
              />
            </button>

            {isPasswordValid ? (
              <form className="relative">
                <h2 className="mt-[40px] w-full text-[#ffffff] text-[1.5rem] font-['DaMiOne'] text-center">
                  Форма добавления участника
                </h2>

                <input
                  type="text"
                  placeholder="Как именовать участника"
                  onChange={(e) => setCompetitorTitle(e.currentTarget.value)}
                  className="mt-[40px] pl-[10px] w-full h-[40px] border-[1px] border-[#bf5af2] rounded-[10px] bg-[#0d0d0d] text-[#ffffff] text-['GoodTimingRegular'] outline-none"
                />

                <input
                  type="text"
                  placeholder="Сколько у участника очков"
                  onChange={(e) => setCompetitorScore(e.currentTarget.value)}
                  className="mt-[40px] pl-[10px] w-full h-[40px] border-[1px] border-[#bf5af2] rounded-[10px] bg-[#0d0d0d] text-[#ffffff] text-['GoodTimingRegular'] outline-none"
                />

                <button
                  type="button"
                  onClick={() => {
                    dispatch(
                      addCompetitor({
                        title: competitorTitle,
                        score: competitorScore.replace(/\D/g, ""),
                      }),
                    );
                    setCompetitorTitle("");
                    setCompetitorScore("");
                    modalFormClose();
                  }}
                  className="mt-[80px] ml-[calc(50%-90px)] w-[180px] h-[50px] bg-[#6bf89a] hover:bg-[#0d0d0d] border-[1px] border-[#6bf89a] rounded-[20px] hover:text-[#6bf89a] text-[1.25rem] font-['GoodTiming'] ease-in-out duration-[400ms] cursor-pointer outline-none"
                >
                  Добавить
                </button>
              </form>
            ) : (
              <form className="relative">
                <h2 className="mt-[40px] w-full text-[#ffffff] text-[1.5rem] font-['DaMiOne'] text-center">
                  Форма входа
                </h2>

                <input
                  type="text"
                  placeholder="Введите пароль"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  className="mt-[40px] pl-[10px] w-full h-[40px] border-[1px] border-[#bf5af2] rounded-[10px] bg-[#0d0d0d] text-[#ffffff] text-['GoodTimingRegular'] outline-none"
                />

                <button
                  type="button"
                  onClick={() => {
                    setIsPasswordValid(password === "{2l#Q3Sj");
                  }}
                  className="mt-[50px] ml-[calc(50%-90px)] w-[180px] h-[50px] bg-[#6bf89a] hover:bg-[#0d0d0d] border-[1px] border-[#6bf89a] rounded-[20px] hover:text-[#6bf89a] text-[1.25rem] font-['GoodTiming'] ease-in-out duration-[400ms] cursor-pointer outline-none"
                >
                  Войти
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {competitors.map((competitor) => (
        <div
          key={competitor.id}
          className="flex justify-between items-center mt-[20px] mx-[20%] px-[50px] w-[60%] h-[50px] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-[20px]"
        >
          <p className="text-[#ffffff] text-[1.125rem] font-['GoodTiming']">
            Участник: {competitor.title}
          </p>

          <p className="text-[#bf5af2] text-[1rem] font-['GoodTimingRegular']">
            Количество баллов: {competitor.score}
          </p>
        </div>
      ))}

      <div className="flex justify-center items-center mt-[30px] w-full ">
        <p className="text-[#6bf89a] text-[1.25rem] font-['GoodTiming']">
          Добавить результат участника
        </p>

        <button
          onClick={() => modalFormOpen()}
          className="ml-[20px] cursor-pointer outline-none"
        >
          <img
            src="/static/ItemAddingIcon.svg"
            alt="Кнопка: добавление результата участника"
          />
        </button>
      </div>
    </main>
  );
}
