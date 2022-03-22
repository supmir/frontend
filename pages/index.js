import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function submitData() {
    router.push("carDetail");
  }
  return (
    <div className="flex justify-center">
      <Head>
        <script src="https://unpkg.com/flowbite@1.4.0/dist/datepicker.js"></script>
      </Head>
      <div className="flex max-w-xl">
        <div className="w-2/3">Welcome to The Insurance Company</div>
        <div className="w-1/3">
          <div className="flex gap-x-3">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300"
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300"
              ></input>
            </div>
          </div>
          <div>
            {/* TODO: use datepicker */}
            <input
              type="text"
              placeholder="Date"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300"
            ></input>
          </div>
          <button onClick={submitData}>Next</button>
        </div>
      </div>
    </div>
  );
}
