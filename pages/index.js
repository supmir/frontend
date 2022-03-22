import { useRouter } from "next/router";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [startDate, setStartDate] = useState();
  const [email, setEmail] = useState("");
  function validateForm() {
    return (
      first &&
      last &&
      startDate &&
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  }

  function submitData() {
    if (validateForm()) {
      router.push("carDetail");
    } else {
      alert("Invalid data");
    }
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
              onChange={(e) => setFirst(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(e) => setLast(e.target.value)}
            ></input>
          </div>

          <div>
            {/* TODO: use datepicker */}

            <DatePicker
              selected={startDate}
              placeholderText="Date of Birth"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="rounded-xl text-sm py-1 px-2 ring-2 ring-grey-900 focus:ring-gray-300 block rounded-xl border-gray-300 w-full"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button onClick={submitData}>Next</button>
        </div>
      </div>
    </div>
  );
}
