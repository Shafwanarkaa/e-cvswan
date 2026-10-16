'use client';

import { useState, useRef } from 'react';
import {
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Printer,
  RotateCw,
  Minimize2,
  FileText,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/data/translations';
import { profile } from '@/data/profile';

export default function ResumeViewer() {
  const { lang } = useLanguage();
  const t = translations[lang].resume;
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoom((z) => Math.min(180, z + 15));
  const handleZoomOut = () => setZoom((z) => Math.max(70, z - 15));
  const handleResetZoom = () => setZoom(100);
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  const handlePrint = () => {
    window.open(profile.cvPath, '_blank');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section
      id="resume"
      className="py-24 bg-[#F5F7F4] relative"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Exact match to Hazel's portfolio) */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF7F1] text-[#1e6144] border border-[#83E6B2]/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d7a57]" />
            {t.badge}
          </div>
          <h2
            id="resume-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172520] tracking-tight"
          >
            {t.title}
          </h2>
          <p className="text-[#61706A] text-base sm:text-lg mt-2 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 1 Single CV Viewer Frame */}
        <div
          ref={viewerContainerRef}
          className={`bg-[#323639] rounded-2xl shadow-2xl border border-gray-400/30 overflow-hidden mx-auto transition-all duration-300 ${
            isFullscreen
              ? 'fixed inset-4 z-50 max-w-none h-[calc(100vh-2rem)] flex flex-col'
              : 'max-w-4xl'
          }`}
        >
          {/* PDF Toolbar */}
          <div className="bg-[#2A2E33] text-gray-200 px-3 sm:px-4 py-2.5 flex items-center justify-between border-b border-black/40 text-xs select-none">
            {/* Left: Document info */}
            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <FileText size={15} className="text-[#83E6B2]" />
              <span className="font-mono text-xs truncate max-w-[200px] sm:max-w-xs">
                Shafwan-Arka-Putra-CV.pdf
              </span>
            </div>

            {/* Center: Zoom Controls (+, -, percentage) */}
            <div className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 70}
                title="Zoom Out (-)"
                className="p-1 hover:bg-white/10 rounded disabled:opacity-30 cursor-pointer text-gray-300 hover:text-white"
                aria-label="Zoom Out"
              >
                <ZoomOut size={14} />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset to 100%"
                className="text-xs font-mono font-semibold px-1.5 py-0.5 hover:bg-white/10 rounded text-gray-300 hover:text-white cursor-pointer"
              >
                {zoom}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 180}
                title="Zoom In (+)"
                className="p-1 hover:bg-white/10 rounded disabled:opacity-30 cursor-pointer text-gray-300 hover:text-white"
                aria-label="Zoom In"
              >
                <ZoomIn size={14} />
              </button>
            </div>

            {/* Right: Actions (Rotate, Print, Fullscreen, Open in new tab, Download) */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleRotate}
                title="Rotate 90deg"
                className="p-1.5 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Rotate"
              >
                <RotateCw size={14} />
              </button>
              <button
                onClick={handlePrint}
                title="Print CV"
                className="p-1.5 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Print"
              >
                <Printer size={14} />
              </button>
              <button
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                className="p-1.5 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fullscreen"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                title={t.open_tab}
                className="p-1.5 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors hidden sm:inline-flex"
                aria-label="Open in new tab"
              >
                <ExternalLink size={14} />
              </a>
              <a
                href={profile.cvPath}
                download
                title={t.download_btn}
                className="p-1.5 hover:bg-white/10 rounded text-[#83E6B2] hover:text-white transition-colors"
                aria-label="Download PDF"
              >
                <Download size={14} />
              </a>
            </div>
          </div>

          {/* Viewer Canvas: Loads the 1 single CV PDF with smooth scaling */}
          <div
            className={`bg-[#525659] p-3 sm:p-6 overflow-auto flex justify-center items-start transition-all ${
              isFullscreen ? 'flex-1' : 'min-h-[600px] sm:min-h-[780px] max-h-[820px]'
            }`}
          >
            <div
              className="w-full bg-white rounded-lg overflow-hidden shadow-2xl transition-transform duration-200"
              style={{
                transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'top center',
                height: isFullscreen ? '100%' : '760px',
              }}
            >
              <iframe
                src={`${profile.cvPath}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title="Shafwan Arka Putra CV Document"
              />
            </div>
          </div>
        </div>

        {/* Action Button: Download PDF */}
        <div className="mt-8 text-center">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 bg-[#0B1715] text-white hover:bg-[#12231F] font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1715]"
          >
            <Download size={18} className="text-[#83E6B2]" />
            <span>{t.download_btn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
