import { Facebook, Linkedin, MessageSquare, Mail, Phone, GraduationCap, User } from "lucide-react"

const defaultStaffMember = {
  staffCode: "0001",
  name: "Ananya",
  gender: "Female",
  birthday: "12th July 1994",
  phone: "+919307059006",
  workplace: "Bengaluru Office",
  status: "Full-time",
  jobPosition: "Job Position",
  academicLevel: "B Sc. Graduate",
  hourlyRate: "₹120.00",
  religion: "Hindu",
  nation: "India",
  maritalStatus: "Married",
  email: "talent@cybercurate.com",
  university: "Oxford University",
  role: "HR Associate",
  citizenId: "Aadhar Card",
  dateOfIssue: "03rd May 2012",
  placeOfBirth: "Mumbai",
  currentAddress: "1/2, Half Road, Fullfield, Wonder City, Bengaluru",
  bankAccountNumber: "23498756421Z",
  bankAccountName: "Nallurhalli Branch",
  bankName: "State Bank of India",
  personalTaxCode: "ABCD1234",
}

export function StaffProfileView({ staffMember = defaultStaffMember }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-white shadow-sm p-8 text-left">
            {/* Profile Avatar and Name */}
            <div className="mb-8">
              <div className="relative flex h-36 w-36 shrink-0 overflow-hidden rounded-full mb-6 ml-0 bg-slate-300">
                <div className="flex h-full w-full items-center justify-center rounded-full text-white text-5xl">
                  <User className="w-20 h-20" />
                </div>
              </div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-6">{staffMember.name}</h1>

              {/* Social Icons */}
              <div className="flex space-x-4 mb-8">
                <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="w-9 h-9 bg-blue-700 rounded flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="w-9 h-9 bg-blue-500 rounded flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="w-9 h-9 bg-gray-600 rounded flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 border-t border-gray-200 pt-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{staffMember.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{staffMember.phone}</span>
              </div>
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{staffMember.university}</span>
              </div>
              <div className="text-gray-700 font-medium text-lg">{staffMember.role}</div>
            </div>

            {/* Direct Manager */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 font-medium">Direct manager:</span>
                <div className="relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full bg-slate-300">
                  <div className="flex h-full w-full items-center justify-center rounded-full">
                    <User className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* General Information */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">General information</h2>
            </div>
            <div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Staff code</span>
                <span className="text-gray-700">{staffMember.staffCode}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Staff name</span>
                <span className="text-gray-700">{staffMember.name}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Gender</span>
                <span className="text-gray-700">{staffMember.gender}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Birthday</span>
                <span className="text-gray-700">{staffMember.birthday}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Phone</span>
                <span className="text-gray-700">{staffMember.phone}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Workplace</span>
                <span className="text-gray-700">{staffMember.workplace}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Status</span>
                <span className="text-gray-700">{staffMember.status}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Job position</span>
                <span className="text-gray-700">{staffMember.jobPosition}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Academic level</span>
                <span className="text-gray-700">{staffMember.academicLevel}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Hourly Rate</span>
                <span className="text-gray-700">{staffMember.hourlyRate}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Religion</span>
                <span className="text-gray-700">{staffMember.religion}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Nation</span>
                <span className="text-gray-700">{staffMember.nation}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Marital status</span>
                <span className="text-gray-700">{staffMember.maritalStatus}</span>
              </div>
            </div>
          </div>

          {/* Related Information */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Related information</h2>
            </div>
            <div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Citizen identification</span>
                <span className="text-gray-700">{staffMember.citizenId}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Date of issue</span>
                <span className="text-gray-700">{staffMember.dateOfIssue}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Place of birth</span>
                <span className="text-gray-700">{staffMember.placeOfBirth}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Current address</span>
                <span className="text-gray-700">{staffMember.currentAddress}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Bank account number</span>
                <span className="text-gray-700">{staffMember.bankAccountNumber}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Bank account name</span>
                <span className="text-gray-700">{staffMember.bankAccountName}</span>
              </div>
              <div className="bg-gray-50 px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Bank name</span>
                <span className="text-gray-700">{staffMember.bankName}</span>
              </div>
              <div className="bg-white px-8 py-4 flex items-center">
                <span className="text-gray-600 w-48">Personal tax code</span>
                <span className="text-gray-700">{staffMember.personalTaxCode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
