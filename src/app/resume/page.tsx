import { RESUME } from "@/data";
import { Download } from "lucide-react";

export const metadata = {
  title: "Resume",
  description: "Resume of Simardeep Dhanda.",
};

export default function ResumePage() {
  return (
    <div className="w-full bg-[#faf8f5] min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                My Resumes
              </h1>
              <p className="text-lg text-gray-600">
                Choose a resume and view/download the PDF.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={RESUME.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                Open in new tab
              </a>
              <a
                href={RESUME.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2332] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src={RESUME.pdfUrl}
            className="w-full h-[calc(100vh-24rem)] sm:h-[calc(100vh-20rem)] lg:h-[calc(100vh-16rem)] border-0"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}

