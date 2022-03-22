import { useRouter } from "next/router";
export default function carDetail() {
  const router = useRouter();
  function submitData() {
    router.push("complete");
  }
  return (
    <div className="flex justify-center">
      <div className="flex max-w-xl">
        <div className="w-2/3">Welcome to The Insurance Company</div>
        <div className="w-1/3">
          <div>
            <input
              type="text"
              placeholder="Plate Number"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300"
            ></input>
          </div>
          <div>
            <div>Have you made any claims in the last 5 years?</div>
            <input
              type="checkbox"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300"
            ></input>
          </div>
          <div>
            <div>How many years have you had your driving license?</div>
            <input
              type="number"
              defaultValue="0"
              min="0"
              step="1"
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
