import Image from "next/image";

export default function Home() {
  return (
      <div className="max-w-md mx-auto mt-16">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">ДоговорниЧек</h1>
          <div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300 mb-4">Регистрация</h2>
              <form id="registerForm" className="space-y-4">
                  <div>
                      <input type="text" id="registerUsername" placeholder="Логин" required
                             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"/>
                  </div>
                  <div>
                      <input type="password" id="registerPassword" placeholder="Пароль" required
                             className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"/>
                  </div>
                  <button type="submit"
                          className="w-full bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white py-2 px-4 rounded-lg transition duration-200">
                      Зарегистрироваться
                  </button>
              </form>
              <p id="registerMessage" className="mt-3 text-center text-sm text-red-500 dark:text-red-400"></p>
          </div>
      </div>
  );
}
