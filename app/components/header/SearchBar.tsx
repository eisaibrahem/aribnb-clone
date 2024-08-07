"use client";
import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Link from "next/link";

const SearchBar = ({ placeholder }: { placeholder?: string }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  const [searchInput, setSearchInput] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);
  return (
    <div className="flex items-center py-2 md:border-2 rounded-full md:shadow-sm relative">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder={placeholder || "Search for a location"}
        className=" mx-auto rounded-full py-2 outline-none  text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent "
      />

      <SearchIcon className="hidden sm:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

      {
        <div
          style={{
            scale: searchInput ? 1 : 0.9,
            opacity: searchInput ? 1 : 0,
            transition: "all 0.2s",
          }}
          className="absolute top-[100%] left-[50%] translate-x-[-50%] h-60  bg-red-200"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={(e) => handleSelect(e)}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b bg-white p-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center bg-white p-5">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              onClick={() => setSearchInput("")}
              className="flex-grow text-red-400"
            >
              Search
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default SearchBar;
