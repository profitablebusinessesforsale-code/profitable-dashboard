import React, { useState } from "react";
import PageHeading from "../../Components/Shared/PageHeading";
import ListingTable from "./ListingTable";
import { Input } from "antd";
import { IoSearch } from "react-icons/io5";

const ListingsTabs = () => {
  const [activeTab, setActiveTab] = useState("allListings");
 const [searchTerm, setSearchTerm] = useState("");
  const tabs = [
    { key: "allListings", label: "ALL Listings" },
    { key: "listingsUnderApproval", label: "Listings Under Approval" },
    { key: "Seller", label: "Business Listings" },
    { key: "Asset Seller", label: "Asset Seller" },
    { key: "Francise Seller", label: "Franchise Seller" },
    { key: "Business Idea Lister", label: "Business Idea Lister" },
    { key: "Broker", label: "Broker" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "allListings":
        return (
          <div className="">
            <ListingTable searchTerm={searchTerm} businessRole="" />
          </div>
        );
      case "listingsUnderApproval":
        return (
          <div className="">
            <ListingTable businessRole="not-approved" />
          </div>
        );
      case "Seller":
        return (
          <div className="">
            <ListingTable businessRole="Seller" />
          </div>
        );
      case "Asset Seller":
        return (
          <div className="">
            <ListingTable businessRole="Asset Seller" />
          </div>
        );
      case "Francise Seller":
        return (
          <div className="">
            <ListingTable businessRole="Francise Seller" />
          </div>
        );
      case "Business Idea Lister":
        return (
          <div className="">
            <ListingTable businessRole="Business Idea Lister" />
          </div>
        );
        case "Broker":
          return (
            <div className="">
              <ListingTable businessRole="Broker" />
            </div>
          );
      default:
        return (
          <div className="">
            <ListingTable businessRole="" />
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between  mb-5">
        <PageHeading title="Listings Management" />
        {activeTab === "allListings" && (
 <div className="relative w-full sm:w-[400px] ">
           <input
             onChange={(e) => setSearchTerm(e.target.value)}
             type="text"
             placeholder="Search by Business Title..."
             className="border-2 border-[#0091ff] py-3 pl-12 pr-[65px] outline-none w-full rounded-md"
           />
           <span className=" text-gray-400 absolute top-0 left-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer">
             <IoSearch className="text-[1.3rem]" />
           </span>
         </div>
)}

      </div>

      {/* Tab Navigation */}
      <div className="mb-5 border border-[#0091FF]">
        <div className="flex flex-wrap gap-2 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-10 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-[#0091FF] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default ListingsTabs;
