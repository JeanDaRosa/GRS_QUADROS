export default function Login() {
  return <div className="flex min-h-[65vh] flex-col justify-center items-center m-auto ">
    <div className="bg-black rounded-xl p-[2px] shadow-2xl shadow-red-500  bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300">
      <div className="flex  flex-col items-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 m-auto w-72 md:h-[500px] justify-between rounded-lg ">
        <div className="pt-6 pb-16">
          <p className="text-4xl font-bold">
            Faça seu login
          </p>
        </div>

        <div className="">
          <div className="mx-auto flex max-w-screen-sm justify-center flex-col pb-10">
            <p className="text-[12px] font-semibold">
              Email
            </p>
            <div className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] ">
              <div className=" h-full w-full bg-gray-800 rounded-md">
                <input
                  type="text"
                  className="rounded-md px-2"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-screen-sm justify-center flex-col  pb-10">
            <p className="text-[12px]">
              Senha
            </p>
            <div className="w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] ">
              <div className=" h-full w-full bg-gray-800 rounded-md">
                <input
                  type="text"
                  className="rounded-md px-2 "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%]  py-2 rounded-md flex justify-center bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 mb-6 text-black ">
          <button>
            Entrar
          </button>
        </div>
      </div>
    </div>
  </div>
}