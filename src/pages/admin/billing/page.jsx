import React, { useState } from "react";
import OPDBills from "../../../components/billing/OPDBills";
import IPDInvoices from "../../../components/billing/IPDInvoices";

const BillingOverview = () => {
  const [activeTab, setActiveTab] = useState("opd");

  return (
    <div className="bg-white p-8 min-h-screen">
      <h1 className="text-2xl font-bold text-[#536CB3]">
        Billing Overview
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mt-6 mb-6">
        <button
          onClick={() => setActiveTab("opd")}
          className={`px-6 py-2 text-sm ${
            activeTab === "opd"
              ? "bg-[#536CB3] text-white"
              : "bg-gray-200"
          }`}
        >
          OPD Bills
        </button>

        <button
          onClick={() => setActiveTab("ipd")}
          className={`px-6 py-2 text-sm ${
            activeTab === "ipd"
              ? "bg-[#536CB3] text-white"
              : "bg-gray-200"
          }`}
        >
          IPD Invoices
        </button>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "opd" && <OPDBills />}
      {activeTab === "ipd" && <IPDInvoices />}
    </div>
  );
};

export default BillingOverview;
