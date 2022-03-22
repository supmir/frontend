import { useRouter } from "next/router";
export default function carDetail() {
  const router = useRouter();
  function back() {
    router.push("/");
  }
  function submitData() {
    router.push("complete");
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-xl gap-x-2 sm:flex-row">
        <div className="">Welcome to The Insurance Company</div>
        <div className="flex flex-col max-w-sm gap-y-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="Plate Number"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>
          <div className="w-full">
            <div className="block">
              Have you made any claims in the last 5 years?
            </div>
            <input type="checkbox"></input>
          </div>
          <div className="w-full">
            <div>How many years have you had your driving license?</div>
            <input
              type="number"
              defaultValue="0"
              min="0"
              step="1"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
            ></input>
          </div>
          <div className="flex">
            <button className="w-1/2" onClick={back}>
              Back
            </button>
            <button className="w-1/2" onClick={submitData}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
