import { useRouter } from "next/router";
import { useState } from "react";
import { isNotEmpty } from "../utils/validation";
export default function CarDetail() {
  const router = useRouter();
  function back() {
    router.push("/");
  }

  function submitData() {
    const { success, message } = validateForm();

    if (success) {
      router.push("complete");
    } else {
      alert(message);
    }
  }

  const [plate, setPlate] = useState("");
  const [claims, setClaims] = useState(true);
  const [years, setYears] = useState("0");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [manuDate, setManuDate] = useState("");
  function validateForm() {
    if (!isNotEmpty(plate)) {
      return { success: false, message: "Please fill in your Plate Number" };
    }
    if (!isNotEmpty(claims)) {
      return {
        success: false,
        message: "Please specify if you've made a claim before",
      };
    }
    if (!isNotEmpty(years) || isNaN(years)) {
      return { success: false, message: "Please check your license duration" };
    }
    if (!isNotEmpty(make)) {
      return { success: false, message: "Please fill in your vehicle make" };
    }
    if (!isNotEmpty(model)) {
      return { success: false, message: "Please fill in your vehicle model" };
    }
    if (!isNotEmpty(manuDate) || isNaN(manuDate)) {
      return {
        success: false,
        message: "Please check your vehicle manufacturing date",
      };
    }
    return {
      success: false,
    };
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
              onChange={(e) => setPlate(e.target.value)}
            ></input>
          </div>
          <div className="w-full">
            <div className="block">
              Have you made any claims in the last 5 years?
            </div>
            <input
              type="checkbox"
              checked={claims}
              onChange={(e) => {
                console.log(e);
                setClaims(e.target.checked);
              }}
            ></input>
          </div>
          <div className="w-full">
            <div>How many years have you had your driving license?</div>
            <input
              type="number"
              defaultValue="0"
              min="0"
              step="1"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(e) => setYears(e.target.value)}
            ></input>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Car Make"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(e) => setMake(e.target.value)}
            ></input>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Car Model"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(e) => setModel(e.target.value)}
            ></input>
          </div>
          <div className="w-full">
            <input
              type="number"
              min="1900"
              placeholder="Car Manufacture Year"
              step="1"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(e) => setManuDate(e.target.value)}
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
