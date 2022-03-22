import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function submitData() {
    router.push("carDetail");
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-xl gap-x-2 sm:flex-row">
        <div className="">Welcome to The Insurance Company</div>
        <div className="flex flex-col max-w-sm gap-y-2">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>

          <div>
            {/* TODO: use datepicker */}
            <input
              type="text"
              placeholder="Date"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>
          <button onClick={submitData}>Next</button>
        </div>
      </div>
    </div>
  );
}
