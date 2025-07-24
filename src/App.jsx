import { useEffect, useState } from "react";
import "./index.css";   // tailwind

export default function App() {
  const interests = ["Frontend-разработка", "Java", "Flutter", "QA Engineer"];
  const socials = [
    { name: "GitHub", url: "https://github.com/0AmIn3" },
    { name: "Telegram", url: "https://t.me/cntz_001" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/amin-ahmedjanov-98a10b365/" },
  ];

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [dark]);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center px-4">
        {/* Кнопка темы */}
        <button
          onClick={() => setDark(!dark)}
          className=" mt-4 text-sm  text-gray-600 dark:text-gray-300"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <header className="flex flex-col md:flex-row items-center gap-6 mt-6 w-full max-w-3xl">
          <img
            src="/avatar.jpg"
            alt="Ваше фото"
            className="w-36 h-36 rounded-full object-cover shadow-md"
          />

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Amin Ahmedjanov — Frontend Web Developer
          </h1>
        </header>

        <section className="mt-8 w-full max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Привет! Я фронтенд‑разработчик с трёхлетним опытом работы с React, Next.js, Redux Toolkit  и Tailwind CSS. Создаю быстрые, адаптивные веб‑интерфейсы, уделяя особое внимание чистому коду, UX-деталям и производительности.
          </p>
        </section>

        <section className="mt-8 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
            Интересы
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 w-full max-w-3xl">
          <blockquote className="border-l-4 border-[#04A29F] pl-4 italic text-gray-600 dark:text-gray-400">
            «В разработке - нет ничего невозможного».
          </blockquote>
        </section>

        <section className="mt-8 mb-12 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
            Найти меня
          </h2>
          <div className="flex gap-4 flex-wrap">
            {socials.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#04a29fba] hover:bg-[#04A29F] text-white rounded transition"
              >
                {name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
