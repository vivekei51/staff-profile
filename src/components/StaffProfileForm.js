"use client"

import { useState } from "react"
import { User, Eye, EyeOff, RotateCcw, Facebook, Linkedin, MessageSquare } from "lucide-react"

export function StaffProfileForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [enableTwoFactor, setEnableTwoFactor] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Staff profile Create</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-3 border-b-2 font-medium text-sm ${
              activeTab === "profile"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("related")}
            className={`px-4 py-3 border-b-2 font-medium text-sm ${
              activeTab === "related"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Related information
          </button>
        </div>
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="space-y-6">
          {/* Two Factor Authentication */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="two-factor"
              checked={enableTwoFactor}
              onChange={(e) => setEnableTwoFactor(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="two-factor" className="text-sm text-gray-700">
              Enable Email Two Factor Authentication
            </label>
          </div>

          {/* Profile Avatar */}
          <div className="flex">
            <div className="w-32 h-32 bg-slate-300 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Staff Code */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> Staff code
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> First name
              </label>
              <input
                type="text"
                defaultValue="Ananya"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> Last name
              </label>
              <input
                type="text"
                defaultValue="Sharma"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Gender</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>None selected</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Birthday */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Birthday</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> Email
              </label>
              <input
                type="email"
                defaultValue="talent@cybercurate.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Workplace */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Workplace</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>None selected</option>
                <option>Bengaluru Office</option>
                <option>Mumbai Office</option>
                <option>Delhi Office</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> Status
              </label>
              <select
                defaultValue="working"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="working">Working</option>
                <option value="inactive">Inactive</option>
                <option value="terminated">Terminated</option>
              </select>
            </div>

            {/* Job Position */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> Job position
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>None selected</option>
                <option>HR Associate</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
            </div>

            {/* Direct Manager */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Direct manager</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>None selected</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>
            </div>

            {/* Role */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Role</label>
              <select
                defaultValue="employee"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Academic Level */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Academic level</label>
              <select
                defaultValue="not-required"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="not-required">Not required</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Hourly Rate</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  defaultValue="0.00"
                  className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">₹</span>
              </div>
            </div>

            {/* Default Language */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Default Language</label>
              <select
                defaultValue="system-default"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="system-default">System Default</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>

            {/* Direction */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Direction</label>
              <select
                defaultValue="system-default"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="system-default">System Default</option>
                <option value="ltr">Left to Right</option>
                <option value="rtl">Right to Left</option>
              </select>
            </div>

            {/* Email Signature */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email Signature</label>
              <textarea
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Other Information */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Other information</label>
              <textarea
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Twilio Phone Number */}
            <div className="md:col-span-2">
              <label className="block text-sm text-blue-600 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Twilio Phone Number
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* WhatsApp Enabled */}
            <div className="md:col-span-2">
              <label className="block text-sm text-blue-600 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Is twilio number whats app enabled
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>None selected</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {/* Password */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">
                <span className="text-red-500">*</span> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 pr-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button type="button" className="text-blue-500 hover:text-blue-600">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Note: if you populate this field, password will be changed on this member.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Related Information Tab */}
      {activeTab === "related" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Domicile */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Domicile</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Marital Status */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Marital status</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>None selected</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>

            {/* Current Address */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Current address</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Nation */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nation</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Place of Birth */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Place of birth</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Religion */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Religion</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Citizen Identification */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Citizen identification</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date of Issue */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Date of issue</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Place of Issue */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Place of issue</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Resident */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Resident</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bank Account Number */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Bank account number</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bank Account Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Bank account name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bank Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Bank name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Personal Tax Code */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Personal tax code</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* EPF No */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">EPF No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Social Security No */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Social Security No</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Facebook */}
            <div>
              <label className="block text-sm text-blue-600 mb-1 flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Facebook
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm text-blue-600 mb-1 flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Skype */}
            <div className="md:col-span-2">
              <label className="block text-sm text-blue-600 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Skype
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-6 border-t mt-8">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Close</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Save</button>
      </div>
    </div>
  )
}
